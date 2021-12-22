import { FeedOptions, SqlQuerySpec } from '@azure/cosmos'
import { Person, PersonEvent } from '../types'
import Database from './db/cosmos'

const jwks = require('jwks-rsa')
const jwt = require('jsonwebtoken')

export interface ValidationRules {
  allowedRoles: string[]
  eventId?: string
  personId?: string
}

type PersonValidationResponse = {
  person: Person
  personEvents: PersonEvent[]
}

const jwksClient = jwks({
  jwksUri: process.env.JWKS_URI,
  cache: true,
  rateLimit: true,
  jwksRequestsPerMinute: 5,
})

const getKey = (header, callback) => {
  jwksClient.getSigningKey(header.kid, (err, key) => {
    const signingKey = key.publicKey || key.rsaPublicKey
    callback(null, signingKey)
  })
}

export const verify = (token: string, rules: ValidationRules) => {
  // return new Promise((resolve) => { resolve("") })
  return new Promise((resolve, reject) => {
    if (token !== '' && token !== undefined && token !== null) {
      jwt.verify(token, getKey, async (err, decoded) => {
        if (err) {
          reject(err)
        } else {
          const personId = decoded['https://graph.appgility.com/personId']
          try {
            const user = await getUser(personId)
            const { person, personEvents } = user

            if (!rules.allowedRoles.includes(person.role)) {
              reject('User does not have permission for this action')
            }

            if (rules.eventId) {
              const userEventIds = personEvents.map((personEvent) => personEvent.eventId)
              if (!userEventIds.includes(rules.eventId)) {
                reject('User does not have permission for this action')
              }
            }

            if (rules.personId) {
              if (rules.personId !== personId) {
                reject('User does not have permission for this action')
              }
            }

            resolve(user)
          } catch (e) {
            console.log(e)
            reject('Error fetching user data')
          }
        }
      })
    } else {
      reject('Unauthenticated request')
    }
  })
}

export const getUser = async (personId: string): Promise<PersonValidationResponse> => {
  const db = new Database()
  let person: Person = {}
  let personEvents: PersonEvent[] = []
  try {
    person = await db.getItemById<Person>('person', personId, personId)

    const querySpec: SqlQuerySpec = {
      query: 'select * from c where c.personId = @personId and c.type = @type',
      parameters: [
        {
          name: '@personId',
          value: personId,
        },
        {
          name: '@type',
          value: 'event',
        },
      ],
    }

    const options: FeedOptions = {
      partitionKey: personId
    }

    personEvents = await db.queryItems<PersonEvent>('person', querySpec, options)
  } catch (e) {
    console.log(e)
  }

  return {
    person,
    personEvents,
  }
}
