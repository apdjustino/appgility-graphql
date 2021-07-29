import Person from "../dataSources/Person";
import Event from "../dataSources/Trial"

export interface DataSources {
  person: Person,
  event: Event
}

export interface QueryParameters {
  name: string,
  value: string | number
}

export interface QuerySpec {
  query: string,
  parameters: QueryParameters[]
}