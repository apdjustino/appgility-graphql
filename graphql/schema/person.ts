import { ValidationRules, verify } from '../dataSources/utils'
import {
  Auth0User,    
  MutationAddDogArgs,
  MutationAddPersonArgs,
  MutationRemoveDogArgs,
  MutationUpdateDogArgs,
  QueryGetPersonByEmailArgs,
  QueryGetPersonByIdArgs,
  QueryGetPersonDogsArgs,
  QueryGetPersonEventArgs,
  QueryGetPersonEventsArgs,
  QuerySearchPersonArgs,
} from '../types'
import { DataSources, ResolverParams } from '../types/dataSources'
import { v4 as uuid } from 'uuid'
import * as yup from 'yup'
const { gql } = require('apollo-server-azure-functions')

const typeDef = gql`
  input PersonInput {
    id: String
    personId: String
    name: String!
    email: String!    
    role: String!
    phone: String!
    address: String
    city: String
    state: String
    zip: String
    claimed: Boolean
  }

  input PersonEventInput {
    id: String!
    eventId: String!
    personId: String!
    type: String!
    name: String!
    locationCity: String!
    locationState: String!
    status: String!
    trialSite: String
  }

  type Person {
    id: String
    type: String
    personId: String
    name: String
    email: String
    role: String
    phone: String
    address: String
    city: String
    state: String
    zip: String
    claimed: Boolean
  }

  type PersonEvent {
    id: String!
    eventId: String!
    personId: String!
    type: String!
    name: String!
    locationCity: String!
    locationState: String!
    status: String!
    trialSite: String
  }

  enum Sex {
    MALE
    FEMALE
  }

  type Dog {
    id: String!
    dogId: String!
    personId: String!
    type: String!
    callName: String!
    akcNumber: String
    akcName: String
    withersHeight: String
    needsMeasured: Boolean
    breed: String
    variety: String
    placeOfBirth: String
    dob: String
    jumpHeight: String
    sex: Sex
    breeder: String
    sire: String
    dam: String
    deleted: Boolean
  }

  type PersonRun {
    id: String!
    type: String!
    runId: String!
    personId: String!
    personName: String!
    dogId: String!
    callName: String!
    trialId: String!
    agilityClass: AgilityClass!
    level: AgilityAbility
    jumpHeight: Int!
    preferred: Boolean!
    group: String
    qualified: Boolean
    deleted: Boolean!
  }

  input DogInput {
    callName: String!
    akcNumber: String
    akcName: String
    withersHeight: String
    needsMeasured: Boolean
    breed: String
    variety: String
    placeOfBirth: String
    dob: String
    jumpHeight: String
    sex: Sex
    breeder: String
    sire: String
    dam: String
  }

  input AppMetadata {
    personId: String
  }

  input Auth0User {
    email: String    
    name: String
    connection: String
    password: String,
    app_metadata: AppMetadata
  }

  extend type Query {
    getPersonById(personId: String!): Person
    getPersonEvents(personId: String!): [PersonEvent]
    getPersonEvent(personId: String!, eventId: String!): PersonEvent
    getPersonByEmail(email: String!): Person
    getPersonDogs(personId: String!): [Dog]
    searchPerson(query: String!): [Person]   
  }

  extend type Mutation {
    addPerson(data: PersonInput, password: String): Person    
    addDog(personId: String!, secretaryId: String!, dog: DogInput!): Dog
    updateDog(personId: String!, dogId: String!, dog: DogInput!): Dog
    removeDog(personId: String!, dogId: String!): Dog    
  }
`

const resolvers = {
  Query: {
    getPersonById: async (_, args: QueryGetPersonByIdArgs, { dataSources, token }: ResolverParams, __) => {
      const rules: ValidationRules = {
        allowedRoles: ['secretary, exhibitor'],
      }
      await verify(token, rules)
      const { person } = dataSources
      const { personId } = args
      const result = await person.getById(personId)
      return result
    },
    getPersonEvents: async (_, args: QueryGetPersonEventsArgs, { dataSources, token }: ResolverParams, __) => {
      const rules: ValidationRules = {
        allowedRoles: ['secretary', 'exhibitor'],
      }
      await verify(token, rules)
      const { person } = dataSources
      const { personId } = args
      const result = await person.getPersonEvents(personId)
      return result
    },
    getPersonEvent: async (_, args: QueryGetPersonEventArgs, { dataSources, token }: ResolverParams, __) => {
      const rules: ValidationRules = {
        allowedRoles: ['secretary', 'exhibitor'],
      }
      await verify(token, rules)
      const { person } = dataSources
      const { personId, eventId } = args
      const result = await person.getPersonEvent(personId, eventId)
      return result
    },
    getPersonByEmail: async (_, args: QueryGetPersonByEmailArgs, { dataSources }: ResolverParams, __) => {
      const { person } = dataSources
      const { email } = args
      const result = await person.getByEmail(email)
      return result
    },
    getPersonDogs: async (_, args: QueryGetPersonDogsArgs, { dataSources, token }: ResolverParams, __) => {
      const rules: ValidationRules = {
        allowedRoles: ['secretary', 'exhibitor'],
      }
      await verify(token, rules)
      const { person } = dataSources
      const { personId } = args
      const result = person.getPersonDogs(personId)
      return result
    },
    searchPerson: async (_, args: QuerySearchPersonArgs, { dataSources }: ResolverParams, __) => {
      const { person } = dataSources;
      const { query } = args;
      const result = await person.findPerson(query);
      return result;
    }
  },
  Mutation: {
    addPerson: async (_, args: MutationAddPersonArgs, { dataSources }: { dataSources: DataSources }, __) => {
      const { person, auth0 } = dataSources

      /* 
        This Mutation will need to:        
        4. Check the subscriptions that need to be added for the specified role (i.e. exhibitor is free or paid version, which plan secretary has)
        5. Create subscriptions (possibly using chargebee)               
      */

      const emailCheck = await person.getByEmail(args.data.email)
      
      if (emailCheck) {
        throw new Error(`Person with ${args.data.email} already exists in Appgility database`)
      }

      // payload validation -- need to add special validation here because we don't want orphaned person accounts due to failed Auth0 signup
      let schema = yup.object().shape({
        id: yup.string().uuid(),
        personId: yup.string().uuid('Not a valid uuid'),
        name: yup.string(),
        email: yup.string().email('Invalid email address'),  
        role: yup.string(),
        phone: yup.string(),
        address: yup.string(),
        city: yup.string(),
        state: yup.string(),
        zip: yup.string(),
        claimed: yup.bool()
      })

      const passwordSchema = yup.object().shape({
        password: yup.string()
          .min(8, 'Password must have a minimum of 8 characters')
          .matches(/(?=^.{16,}$)((?=.*\w)(?=.*[A-Z])(?=.*[0-9])(?=.*[|!$% &@#/()?^'\+\-*]))^.*/, { message: 'Password must include lower case, lower case, numbers, and special characters', excludeEmptyString: true})          
      })

      try {
        await passwordSchema.validate({password: args.password})
      } catch (error) {
        throw new Error(error.errors[0])
      }      
     
      try {
        await schema.validate(args.data)
      } catch (error) {
        throw new Error(`Error with Person payload: ${error}`)
      }    
      
      args.data.personId = uuid()
      args.data.id = args.data.personId
      args.data.claimed = false
            
      const newPersonResult = await person.addNewPerson(args.data)
      
      if (args.password) {                
        args.data.claimed = true

        const auth0Payload: Auth0User = {
          email: args.data.email,        
          name: args.data.name,
          password: args.password,
          app_metadata: {
            personId: newPersonResult.personId
          }
        }
        
        await auth0.createNewUser(auth0Payload)
      }

      return newPersonResult
    },
    addDog: async (_, args: MutationAddDogArgs, { dataSources, token }: { dataSources: DataSources, token: string}, __) => {
      const rules: ValidationRules = {
        allowedRoles: ['secretary', 'exhibitor'],
        personId: args.secretaryId
      }
      await verify(token, rules)

      const { person } = dataSources
      const result = await person.addDog(args.personId, args.dog)
      return result
    },
    updateDog: async (_, args: MutationUpdateDogArgs, { dataSources, token }: { dataSources: DataSources, token: string}, __) => {
      const rules: ValidationRules = {
        allowedRoles: ['secretary', 'exhibitor'],
        personId: args.personId
      }
      await verify(token, rules)

      const { person } = dataSources
      const result = await person.updateDog(args.personId, args.dogId, args.dog)
      return result
    },
    removeDog: async (_, args: MutationRemoveDogArgs, { dataSources, token }: { dataSources: DataSources, token: string}, __) => {
      const rules: ValidationRules = {
        allowedRoles: ['secretary', 'exhibitor'],
        personId: args.personId
      }
      await verify(token, rules)

      const { person } = dataSources
      const result = await person.removeDog(args.personId, args.dogId)
      return result
    }
  },
}

exports.Person = typeDef
exports.personResolvers = resolvers
