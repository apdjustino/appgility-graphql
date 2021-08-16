import Person from "../dataSources/Person";
import Event from "../dataSources/Event"
import Trial from '../dataSources/Trial'

export interface DataSources {
  person: Person,
  event: Event,
  trial: Trial
}

export interface QueryParameters {
  name: string,
  value: string | number
}

export interface QuerySpec {
  query: string,
  parameters: QueryParameters[]
}