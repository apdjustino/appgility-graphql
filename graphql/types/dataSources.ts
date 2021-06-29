import Person from "../dataSources/Person";
import Trial from "../dataSources/Trial"

export interface DataSources {
  person: Person,
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