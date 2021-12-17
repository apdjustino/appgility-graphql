import Person from '../dataSources/Person'
import Event from '../dataSources/Event'
import Trial from '../dataSources/Trial'
import Auth0 from '../dataSources/Auth0'
import Schedule from '../dataSources/Schedule'

export interface DataSources {
  person: Person
  event: Event
  trial: Trial,
  auth0: Auth0,
  schedule: Schedule

}

export interface QueryParameters {
  name: string
  value: string | number
}

export interface QuerySpec {
  query: string
  parameters: QueryParameters[]
}

export interface ResolverParams {
  dataSources: DataSources
  token?: string
}