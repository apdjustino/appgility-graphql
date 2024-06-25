import { GraphQLResolveInfo } from 'graphql';
import { ServerContext } from '../server';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Ability = {
  __typename?: 'Ability';
  label: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type AbilityInput = {
  label: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type AddEventTrial = {
  dayToDayMoveup?: InputMaybe<Scalars['Boolean']['input']>;
  eventId: Scalars['String']['input'];
  fastAbility?: InputMaybe<Array<InputMaybe<AbilityInput>>>;
  fastClass?: InputMaybe<Scalars['Boolean']['input']>;
  fastPreferred?: InputMaybe<Array<InputMaybe<AbilityInput>>>;
  judges?: InputMaybe<Array<InputMaybe<JudgeInput>>>;
  jumpersAbility?: InputMaybe<Array<InputMaybe<AbilityInput>>>;
  jumpersClass?: InputMaybe<Scalars['Boolean']['input']>;
  jumpersPreferred?: InputMaybe<Array<InputMaybe<AbilityInput>>>;
  mailEntries?: InputMaybe<Scalars['Int']['input']>;
  onlineEntries?: InputMaybe<Scalars['Int']['input']>;
  premierJumpers?: InputMaybe<Scalars['Boolean']['input']>;
  premierStandard?: InputMaybe<Scalars['Boolean']['input']>;
  runLimit?: InputMaybe<Scalars['Int']['input']>;
  standardAbility?: InputMaybe<Array<InputMaybe<AbilityInput>>>;
  standardClass?: InputMaybe<Scalars['Boolean']['input']>;
  standardPreferred?: InputMaybe<Array<InputMaybe<AbilityInput>>>;
  t2bClass?: InputMaybe<Scalars['Boolean']['input']>;
  trialDate?: InputMaybe<Scalars['String']['input']>;
};

export type AddTrial = {
  eventId: Scalars['String']['input'];
  trialDate?: InputMaybe<Scalars['String']['input']>;
};

export enum AgilityAbility {
  Excellent = 'EXCELLENT',
  Masters = 'MASTERS',
  NoviceA = 'NOVICE_A',
  NoviceB = 'NOVICE_B',
  Open = 'OPEN'
}

export enum AgilityClass {
  Fast = 'FAST',
  Jumpers = 'JUMPERS',
  PremierJumpers = 'PREMIER_JUMPERS',
  PremierStandard = 'PREMIER_STANDARD',
  Standard = 'STANDARD',
  T2B = 'T2B'
}

export type AppMetadata = {
  personId?: InputMaybe<Scalars['String']['input']>;
};

export type Auth0User = {
  app_metadata?: InputMaybe<AppMetadata>;
  connection?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type CreateNewEventInput = {
  eventNumber: Scalars['String']['input'];
  hostClub: Scalars['String']['input'];
  locationCity: Scalars['String']['input'];
  locationState: Scalars['String']['input'];
  trialSite: Scalars['String']['input'];
};

export type Dog = {
  __typename?: 'Dog';
  akcName?: Maybe<Scalars['String']['output']>;
  akcNumber?: Maybe<Scalars['String']['output']>;
  breed?: Maybe<Scalars['String']['output']>;
  breeder?: Maybe<Scalars['String']['output']>;
  callName: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['String']['output']>;
  dam?: Maybe<Scalars['String']['output']>;
  deleted?: Maybe<Scalars['Boolean']['output']>;
  dob?: Maybe<Scalars['String']['output']>;
  dogId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  needsMeasured?: Maybe<Scalars['Boolean']['output']>;
  numberType?: Maybe<Scalars['String']['output']>;
  personId: Scalars['String']['output'];
  placeOfBirth?: Maybe<Scalars['String']['output']>;
  sex?: Maybe<Sex>;
  sire?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  variety?: Maybe<Scalars['String']['output']>;
  withersHeight?: Maybe<Scalars['String']['output']>;
};

export type DogInput = {
  akcName?: InputMaybe<Scalars['String']['input']>;
  akcNumber?: InputMaybe<Scalars['String']['input']>;
  breed?: InputMaybe<Scalars['String']['input']>;
  breeder?: InputMaybe<Scalars['String']['input']>;
  callName: Scalars['String']['input'];
  dam?: InputMaybe<Scalars['String']['input']>;
  dob?: InputMaybe<Scalars['String']['input']>;
  needsMeasured?: InputMaybe<Scalars['Boolean']['input']>;
  numberType?: InputMaybe<Scalars['String']['input']>;
  placeOfBirth?: InputMaybe<Scalars['String']['input']>;
  sex?: InputMaybe<Sex>;
  sire?: InputMaybe<Scalars['String']['input']>;
  variety?: InputMaybe<Scalars['String']['input']>;
  withersHeight?: InputMaybe<Scalars['String']['input']>;
};

export type Event = {
  __typename?: 'Event';
  closingDate?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  eventId: Scalars['String']['output'];
  eventNumber: Scalars['String']['output'];
  hostClub?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  locationCity: Scalars['String']['output'];
  locationState: Scalars['String']['output'];
  openingDate?: Maybe<Scalars['String']['output']>;
  premiumLink?: Maybe<Scalars['String']['output']>;
  runPrices?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  status: Scalars['String']['output'];
  trialChairEmail?: Maybe<Scalars['String']['output']>;
  trialChairName?: Maybe<Scalars['String']['output']>;
  trialChairPhone?: Maybe<Scalars['String']['output']>;
  trialSite?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type EventTrial = {
  __typename?: 'EventTrial';
  createdAt?: Maybe<Scalars['String']['output']>;
  dayToDayMoveup?: Maybe<Scalars['Boolean']['output']>;
  eventId: Scalars['String']['output'];
  fastAbility?: Maybe<Array<Maybe<Ability>>>;
  fastClass?: Maybe<Scalars['Boolean']['output']>;
  fastPreferred?: Maybe<Array<Maybe<Ability>>>;
  id: Scalars['String']['output'];
  judges?: Maybe<Array<Maybe<Judge>>>;
  jumpersAbility?: Maybe<Array<Maybe<Ability>>>;
  jumpersClass?: Maybe<Scalars['Boolean']['output']>;
  jumpersPreferred?: Maybe<Array<Maybe<Ability>>>;
  mailEntries?: Maybe<Scalars['Int']['output']>;
  onlineEntries?: Maybe<Scalars['Int']['output']>;
  premierJumpers?: Maybe<Scalars['Boolean']['output']>;
  premierStandard?: Maybe<Scalars['Boolean']['output']>;
  runLimit?: Maybe<Scalars['Int']['output']>;
  standardAbility?: Maybe<Array<Maybe<Ability>>>;
  standardClass?: Maybe<Scalars['Boolean']['output']>;
  standardPreferred?: Maybe<Array<Maybe<Ability>>>;
  t2bClass?: Maybe<Scalars['Boolean']['output']>;
  trialDate?: Maybe<Scalars['String']['output']>;
  trialId: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type Judge = {
  __typename?: 'Judge';
  akcIdentifier?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
};

export type JudgeInput = {
  akcIdentifier?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addDog?: Maybe<Dog>;
  addEvent?: Maybe<Event>;
  addEventTrial?: Maybe<EventTrial>;
  addPerson?: Maybe<Person>;
  addRun?: Maybe<Run>;
  deleteRun?: Maybe<Run>;
  editRun?: Maybe<Run>;
  moveUp?: Maybe<Run>;
  removeDog?: Maybe<Dog>;
  updateDog?: Maybe<Dog>;
  updateEvent?: Maybe<Event>;
  updateEventTrial?: Maybe<EventTrial>;
};


export type MutationAddDogArgs = {
  dog: DogInput;
  personId: Scalars['String']['input'];
  secretaryId: Scalars['String']['input'];
};


export type MutationAddEventArgs = {
  data?: InputMaybe<CreateNewEventInput>;
  personId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationAddEventTrialArgs = {
  eventTrial: AddEventTrial;
};


export type MutationAddPersonArgs = {
  data?: InputMaybe<PersonInput>;
  password?: InputMaybe<Scalars['String']['input']>;
};


export type MutationAddRunArgs = {
  dogId: Scalars['String']['input'];
  eventId: Scalars['String']['input'];
  personId: Scalars['String']['input'];
  run: RunInput;
  trialId: Scalars['String']['input'];
};


export type MutationDeleteRunArgs = {
  eventId: Scalars['String']['input'];
  runId: Scalars['String']['input'];
  trialId: Scalars['String']['input'];
};


export type MutationEditRunArgs = {
  eventId: Scalars['String']['input'];
  runId: Scalars['String']['input'];
  trialId: Scalars['String']['input'];
  updatedRun: RunInput;
};


export type MutationMoveUpArgs = {
  eventId: Scalars['String']['input'];
  newLevel: AgilityAbility;
  runId: Scalars['String']['input'];
  trialId: Scalars['String']['input'];
};


export type MutationRemoveDogArgs = {
  dogId: Scalars['String']['input'];
  personId: Scalars['String']['input'];
};


export type MutationUpdateDogArgs = {
  dog: DogInput;
  dogId: Scalars['String']['input'];
  personId: Scalars['String']['input'];
};


export type MutationUpdateEventArgs = {
  eventId: Scalars['String']['input'];
  personId: Scalars['String']['input'];
  updatedEvent: UpdateEventInput;
};


export type MutationUpdateEventTrialArgs = {
  eventId: Scalars['String']['input'];
  eventTrial: UpdateEventTrial;
  trialId: Scalars['String']['input'];
};

export type PaginatedRunResponse = {
  __typename?: 'PaginatedRunResponse';
  continuationToken?: Maybe<Scalars['String']['output']>;
  hasMoreResults?: Maybe<Scalars['Boolean']['output']>;
  runs?: Maybe<Array<Maybe<Run>>>;
};

export type Person = {
  __typename?: 'Person';
  address?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  claimed?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  personId?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  zip?: Maybe<Scalars['String']['output']>;
};

export type PersonEvent = {
  __typename?: 'PersonEvent';
  createdAt?: Maybe<Scalars['String']['output']>;
  eventId: Scalars['String']['output'];
  eventNumber: Scalars['String']['output'];
  hostClub: Scalars['String']['output'];
  id: Scalars['String']['output'];
  locationCity: Scalars['String']['output'];
  locationState: Scalars['String']['output'];
  personId: Scalars['String']['output'];
  status: Scalars['String']['output'];
  trialDates?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  trialSite?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type PersonEventInput = {
  eventId: Scalars['String']['input'];
  eventNumber: Scalars['String']['input'];
  hostClub: Scalars['String']['input'];
  id: Scalars['String']['input'];
  locationCity: Scalars['String']['input'];
  locationState: Scalars['String']['input'];
  personId: Scalars['String']['input'];
  status: Scalars['String']['input'];
  trialSite?: InputMaybe<Scalars['String']['input']>;
  type: Scalars['String']['input'];
};

export type PersonInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  claimed?: InputMaybe<Scalars['Boolean']['input']>;
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  personId?: InputMaybe<Scalars['String']['input']>;
  phone: Scalars['String']['input'];
  role: Scalars['String']['input'];
  state?: InputMaybe<Scalars['String']['input']>;
  zip?: InputMaybe<Scalars['String']['input']>;
};

export type PersonRun = {
  __typename?: 'PersonRun';
  agilityClass: AgilityClass;
  callName: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['String']['output']>;
  deleted: Scalars['Boolean']['output'];
  dogId: Scalars['String']['output'];
  group?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  jumpHeight: Scalars['Int']['output'];
  level?: Maybe<AgilityAbility>;
  personId: Scalars['String']['output'];
  personName: Scalars['String']['output'];
  preferred: Scalars['Boolean']['output'];
  qualified?: Maybe<Scalars['Boolean']['output']>;
  runId: Scalars['String']['output'];
  trialId: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  getEvent?: Maybe<Event>;
  getEventTrial?: Maybe<EventTrial>;
  getEventTrials?: Maybe<Array<Maybe<EventTrial>>>;
  getPersonByEmail?: Maybe<Person>;
  getPersonById?: Maybe<Person>;
  getPersonDogs?: Maybe<Array<Maybe<Dog>>>;
  getPersonEvent?: Maybe<PersonEvent>;
  getPersonEvents?: Maybe<Array<Maybe<PersonEvent>>>;
  getTrial?: Maybe<Trial>;
  getTrialRuns?: Maybe<Array<Maybe<Run>>>;
  getTrialRunsPaginated?: Maybe<PaginatedRunResponse>;
  searchPerson?: Maybe<Array<Maybe<Person>>>;
};


export type QueryGetEventArgs = {
  eventId: Scalars['String']['input'];
};


export type QueryGetEventTrialArgs = {
  eventId: Scalars['String']['input'];
  trialId: Scalars['String']['input'];
};


export type QueryGetEventTrialsArgs = {
  eventId: Scalars['String']['input'];
};


export type QueryGetPersonByEmailArgs = {
  email: Scalars['String']['input'];
};


export type QueryGetPersonByIdArgs = {
  personId: Scalars['String']['input'];
};


export type QueryGetPersonDogsArgs = {
  personId: Scalars['String']['input'];
};


export type QueryGetPersonEventArgs = {
  eventId: Scalars['String']['input'];
  personId: Scalars['String']['input'];
};


export type QueryGetPersonEventsArgs = {
  personId: Scalars['String']['input'];
};


export type QueryGetTrialArgs = {
  trialId: Scalars['String']['input'];
};


export type QueryGetTrialRunsArgs = {
  trialId: Scalars['String']['input'];
};


export type QueryGetTrialRunsPaginatedArgs = {
  agilityClass?: InputMaybe<Array<InputMaybe<AgilityClass>>>;
  continuationToken?: InputMaybe<Scalars['String']['input']>;
  jumpHeight?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  level?: InputMaybe<Array<InputMaybe<AgilityAbility>>>;
  preferred?: InputMaybe<Scalars['Boolean']['input']>;
  regular?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  trialId: Scalars['String']['input'];
};


export type QuerySearchPersonArgs = {
  query: Scalars['String']['input'];
};

export type Run = {
  __typename?: 'Run';
  agilityClass: AgilityClass;
  armband?: Maybe<Scalars['String']['output']>;
  callName: Scalars['String']['output'];
  courseLength?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  deleted: Scalars['Boolean']['output'];
  dogId: Scalars['String']['output'];
  excusal?: Maybe<Scalars['Int']['output']>;
  failure?: Maybe<Scalars['Int']['output']>;
  group?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  jumpHeight: Scalars['Int']['output'];
  level?: Maybe<AgilityAbility>;
  obstacles?: Maybe<Array<Maybe<Scalars['Boolean']['output']>>>;
  paid?: Maybe<Scalars['Boolean']['output']>;
  personId: Scalars['String']['output'];
  personName: Scalars['String']['output'];
  points?: Maybe<Scalars['Int']['output']>;
  preferred: Scalars['Boolean']['output'];
  price?: Maybe<Scalars['Int']['output']>;
  qualified?: Maybe<Scalars['Boolean']['output']>;
  rank?: Maybe<Scalars['Int']['output']>;
  refusal?: Maybe<Scalars['Int']['output']>;
  runId: Scalars['String']['output'];
  score?: Maybe<Scalars['Int']['output']>;
  sendBonus?: Maybe<Scalars['Boolean']['output']>;
  table?: Maybe<Scalars['Int']['output']>;
  time?: Maybe<Scalars['Float']['output']>;
  timeDeduction?: Maybe<Scalars['Int']['output']>;
  trialId: Scalars['String']['output'];
  type: Scalars['String']['output'];
  wrongCourse?: Maybe<Scalars['Int']['output']>;
};

export type RunInput = {
  agilityClass: AgilityClass;
  armband?: InputMaybe<Scalars['String']['input']>;
  courseLength?: InputMaybe<Scalars['Int']['input']>;
  excusal?: InputMaybe<Scalars['Int']['input']>;
  failure?: InputMaybe<Scalars['Int']['input']>;
  group?: InputMaybe<Scalars['String']['input']>;
  jumpHeight: Scalars['Int']['input'];
  level?: InputMaybe<AgilityAbility>;
  obstacles?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  paid?: InputMaybe<Scalars['Boolean']['input']>;
  points?: InputMaybe<Scalars['Int']['input']>;
  preferred: Scalars['Boolean']['input'];
  price?: InputMaybe<Scalars['Int']['input']>;
  qualified?: InputMaybe<Scalars['Boolean']['input']>;
  rank?: InputMaybe<Scalars['Int']['input']>;
  refusal?: InputMaybe<Scalars['Int']['input']>;
  score?: InputMaybe<Scalars['Int']['input']>;
  sendBonus?: InputMaybe<Scalars['Boolean']['input']>;
  table?: InputMaybe<Scalars['Int']['input']>;
  time?: InputMaybe<Scalars['Float']['input']>;
  timeDeduction?: InputMaybe<Scalars['Float']['input']>;
  wrongCourse?: InputMaybe<Scalars['Int']['input']>;
};

export type RunView = {
  __typename?: 'RunView';
  agilityClass: AgilityClass;
  armband?: Maybe<Scalars['String']['output']>;
  courseLength?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  deleted: Scalars['Boolean']['output'];
  dog?: Maybe<Dog>;
  excusal?: Maybe<Scalars['Int']['output']>;
  failure?: Maybe<Scalars['Int']['output']>;
  group?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  jumpHeight: Scalars['Int']['output'];
  level?: Maybe<AgilityAbility>;
  obstacles?: Maybe<Array<Maybe<Scalars['Boolean']['output']>>>;
  paid?: Maybe<Scalars['Boolean']['output']>;
  person?: Maybe<Person>;
  points?: Maybe<Scalars['Int']['output']>;
  preferred: Scalars['Boolean']['output'];
  qualified?: Maybe<Scalars['Boolean']['output']>;
  rank?: Maybe<Scalars['Int']['output']>;
  refusal?: Maybe<Scalars['Int']['output']>;
  runId: Scalars['String']['output'];
  score?: Maybe<Scalars['Int']['output']>;
  sendBonus?: Maybe<Scalars['Boolean']['output']>;
  table?: Maybe<Scalars['Int']['output']>;
  time?: Maybe<Scalars['Float']['output']>;
  timeDeduction?: Maybe<Scalars['Int']['output']>;
  trialId: Scalars['String']['output'];
  type: Scalars['String']['output'];
  wrongCourse?: Maybe<Scalars['Int']['output']>;
};

export type ScheduleRun = {
  __typename?: 'ScheduleRun';
  agilityClass: AgilityClass;
  callName: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['String']['output']>;
  dogId: Scalars['String']['output'];
  group?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  jumpHeight: Scalars['Int']['output'];
  level?: Maybe<AgilityAbility>;
  parent?: Maybe<Scalars['String']['output']>;
  personId: Scalars['String']['output'];
  personName: Scalars['String']['output'];
  preferred: Scalars['Boolean']['output'];
  runId: Scalars['String']['output'];
  trialId: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export enum Sex {
  Female = 'FEMALE',
  Male = 'MALE'
}

export type Trial = {
  __typename?: 'Trial';
  createdAt?: Maybe<Scalars['String']['output']>;
  eventId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  trialDate?: Maybe<Scalars['String']['output']>;
  trialId: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type UpdateEventInput = {
  closingDate?: InputMaybe<Scalars['String']['input']>;
  eventId: Scalars['String']['input'];
  eventNumber: Scalars['String']['input'];
  hostClub?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  locationCity: Scalars['String']['input'];
  locationState: Scalars['String']['input'];
  openingDate?: InputMaybe<Scalars['String']['input']>;
  premiumLink?: InputMaybe<Scalars['String']['input']>;
  runPrices?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  status: Scalars['String']['input'];
  trialChairEmail?: InputMaybe<Scalars['String']['input']>;
  trialChairName?: InputMaybe<Scalars['String']['input']>;
  trialChairPhone?: InputMaybe<Scalars['String']['input']>;
  trialSite?: InputMaybe<Scalars['String']['input']>;
  type: Scalars['String']['input'];
};

export type UpdateEventTrial = {
  dayToDayMoveup?: InputMaybe<Scalars['Boolean']['input']>;
  eventId: Scalars['String']['input'];
  fastAbility?: InputMaybe<Array<InputMaybe<AbilityInput>>>;
  fastClass?: InputMaybe<Scalars['Boolean']['input']>;
  fastPreferred?: InputMaybe<Array<InputMaybe<AbilityInput>>>;
  id: Scalars['String']['input'];
  judges?: InputMaybe<Array<InputMaybe<JudgeInput>>>;
  jumpersAbility?: InputMaybe<Array<InputMaybe<AbilityInput>>>;
  jumpersClass?: InputMaybe<Scalars['Boolean']['input']>;
  jumpersPreferred?: InputMaybe<Array<InputMaybe<AbilityInput>>>;
  mailEntries?: InputMaybe<Scalars['Int']['input']>;
  onlineEntries?: InputMaybe<Scalars['Int']['input']>;
  premierJumpers?: InputMaybe<Scalars['Boolean']['input']>;
  premierStandard?: InputMaybe<Scalars['Boolean']['input']>;
  runLimit?: InputMaybe<Scalars['Int']['input']>;
  standardAbility?: InputMaybe<Array<InputMaybe<AbilityInput>>>;
  standardClass?: InputMaybe<Scalars['Boolean']['input']>;
  standardPreferred?: InputMaybe<Array<InputMaybe<AbilityInput>>>;
  t2bClass?: InputMaybe<Scalars['Boolean']['input']>;
  trialDate?: InputMaybe<Scalars['String']['input']>;
  trialId: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

export type UpdateTrial = {
  eventId: Scalars['String']['input'];
  id: Scalars['String']['input'];
  trialDate?: InputMaybe<Scalars['String']['input']>;
  trialId: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Ability: ResolverTypeWrapper<Ability>;
  AbilityInput: AbilityInput;
  AddEventTrial: AddEventTrial;
  AddTrial: AddTrial;
  AgilityAbility: AgilityAbility;
  AgilityClass: AgilityClass;
  AppMetadata: AppMetadata;
  Auth0User: Auth0User;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  CreateNewEventInput: CreateNewEventInput;
  Dog: ResolverTypeWrapper<Dog>;
  DogInput: DogInput;
  Event: ResolverTypeWrapper<Event>;
  EventTrial: ResolverTypeWrapper<EventTrial>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Judge: ResolverTypeWrapper<Judge>;
  JudgeInput: JudgeInput;
  Mutation: ResolverTypeWrapper<{}>;
  PaginatedRunResponse: ResolverTypeWrapper<PaginatedRunResponse>;
  Person: ResolverTypeWrapper<Person>;
  PersonEvent: ResolverTypeWrapper<PersonEvent>;
  PersonEventInput: PersonEventInput;
  PersonInput: PersonInput;
  PersonRun: ResolverTypeWrapper<PersonRun>;
  Query: ResolverTypeWrapper<{}>;
  Run: ResolverTypeWrapper<Run>;
  RunInput: RunInput;
  RunView: ResolverTypeWrapper<RunView>;
  ScheduleRun: ResolverTypeWrapper<ScheduleRun>;
  Sex: Sex;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Trial: ResolverTypeWrapper<Trial>;
  UpdateEventInput: UpdateEventInput;
  UpdateEventTrial: UpdateEventTrial;
  UpdateTrial: UpdateTrial;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Ability: Ability;
  AbilityInput: AbilityInput;
  AddEventTrial: AddEventTrial;
  AddTrial: AddTrial;
  AppMetadata: AppMetadata;
  Auth0User: Auth0User;
  Boolean: Scalars['Boolean']['output'];
  CreateNewEventInput: CreateNewEventInput;
  Dog: Dog;
  DogInput: DogInput;
  Event: Event;
  EventTrial: EventTrial;
  Float: Scalars['Float']['output'];
  Int: Scalars['Int']['output'];
  Judge: Judge;
  JudgeInput: JudgeInput;
  Mutation: {};
  PaginatedRunResponse: PaginatedRunResponse;
  Person: Person;
  PersonEvent: PersonEvent;
  PersonEventInput: PersonEventInput;
  PersonInput: PersonInput;
  PersonRun: PersonRun;
  Query: {};
  Run: Run;
  RunInput: RunInput;
  RunView: RunView;
  ScheduleRun: ScheduleRun;
  String: Scalars['String']['output'];
  Trial: Trial;
  UpdateEventInput: UpdateEventInput;
  UpdateEventTrial: UpdateEventTrial;
  UpdateTrial: UpdateTrial;
}>;

export type AuthDirectiveArgs = {
  roles: Array<Scalars['String']['input']>;
};

export type AuthDirectiveResolver<Result, Parent, ContextType = ServerContext, Args = AuthDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AbilityResolvers<ContextType = ServerContext, ParentType extends ResolversParentTypes['Ability'] = ResolversParentTypes['Ability']> = ResolversObject<{
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DogResolvers<ContextType = ServerContext, ParentType extends ResolversParentTypes['Dog'] = ResolversParentTypes['Dog']> = ResolversObject<{
  akcName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  akcNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  breed?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  breeder?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  callName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dam?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deleted?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  dob?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dogId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  needsMeasured?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  numberType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  placeOfBirth?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sex?: Resolver<Maybe<ResolversTypes['Sex']>, ParentType, ContextType>;
  sire?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  variety?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  withersHeight?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EventResolvers<ContextType = ServerContext, ParentType extends ResolversParentTypes['Event'] = ResolversParentTypes['Event']> = ResolversObject<{
  closingDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  eventId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  eventNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hostClub?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  locationCity?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  locationState?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  openingDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  premiumLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  runPrices?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  trialChairEmail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  trialChairName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  trialChairPhone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  trialSite?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EventTrialResolvers<ContextType = ServerContext, ParentType extends ResolversParentTypes['EventTrial'] = ResolversParentTypes['EventTrial']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dayToDayMoveup?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  eventId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fastAbility?: Resolver<Maybe<Array<Maybe<ResolversTypes['Ability']>>>, ParentType, ContextType>;
  fastClass?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  fastPreferred?: Resolver<Maybe<Array<Maybe<ResolversTypes['Ability']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  judges?: Resolver<Maybe<Array<Maybe<ResolversTypes['Judge']>>>, ParentType, ContextType>;
  jumpersAbility?: Resolver<Maybe<Array<Maybe<ResolversTypes['Ability']>>>, ParentType, ContextType>;
  jumpersClass?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  jumpersPreferred?: Resolver<Maybe<Array<Maybe<ResolversTypes['Ability']>>>, ParentType, ContextType>;
  mailEntries?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  onlineEntries?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  premierJumpers?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  premierStandard?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  runLimit?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  standardAbility?: Resolver<Maybe<Array<Maybe<ResolversTypes['Ability']>>>, ParentType, ContextType>;
  standardClass?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  standardPreferred?: Resolver<Maybe<Array<Maybe<ResolversTypes['Ability']>>>, ParentType, ContextType>;
  t2bClass?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  trialDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  trialId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type JudgeResolvers<ContextType = ServerContext, ParentType extends ResolversParentTypes['Judge'] = ResolversParentTypes['Judge']> = ResolversObject<{
  akcIdentifier?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = ServerContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  addDog?: Resolver<Maybe<ResolversTypes['Dog']>, ParentType, ContextType, RequireFields<MutationAddDogArgs, 'dog' | 'personId' | 'secretaryId'>>;
  addEvent?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType, Partial<MutationAddEventArgs>>;
  addEventTrial?: Resolver<Maybe<ResolversTypes['EventTrial']>, ParentType, ContextType, RequireFields<MutationAddEventTrialArgs, 'eventTrial'>>;
  addPerson?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType, Partial<MutationAddPersonArgs>>;
  addRun?: Resolver<Maybe<ResolversTypes['Run']>, ParentType, ContextType, RequireFields<MutationAddRunArgs, 'dogId' | 'eventId' | 'personId' | 'run' | 'trialId'>>;
  deleteRun?: Resolver<Maybe<ResolversTypes['Run']>, ParentType, ContextType, RequireFields<MutationDeleteRunArgs, 'eventId' | 'runId' | 'trialId'>>;
  editRun?: Resolver<Maybe<ResolversTypes['Run']>, ParentType, ContextType, RequireFields<MutationEditRunArgs, 'eventId' | 'runId' | 'trialId' | 'updatedRun'>>;
  moveUp?: Resolver<Maybe<ResolversTypes['Run']>, ParentType, ContextType, RequireFields<MutationMoveUpArgs, 'eventId' | 'newLevel' | 'runId' | 'trialId'>>;
  removeDog?: Resolver<Maybe<ResolversTypes['Dog']>, ParentType, ContextType, RequireFields<MutationRemoveDogArgs, 'dogId' | 'personId'>>;
  updateDog?: Resolver<Maybe<ResolversTypes['Dog']>, ParentType, ContextType, RequireFields<MutationUpdateDogArgs, 'dog' | 'dogId' | 'personId'>>;
  updateEvent?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType, RequireFields<MutationUpdateEventArgs, 'eventId' | 'personId' | 'updatedEvent'>>;
  updateEventTrial?: Resolver<Maybe<ResolversTypes['EventTrial']>, ParentType, ContextType, RequireFields<MutationUpdateEventTrialArgs, 'eventId' | 'eventTrial' | 'trialId'>>;
}>;

export type PaginatedRunResponseResolvers<ContextType = ServerContext, ParentType extends ResolversParentTypes['PaginatedRunResponse'] = ResolversParentTypes['PaginatedRunResponse']> = ResolversObject<{
  continuationToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hasMoreResults?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  runs?: Resolver<Maybe<Array<Maybe<ResolversTypes['Run']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PersonResolvers<ContextType = ServerContext, ParentType extends ResolversParentTypes['Person'] = ResolversParentTypes['Person']> = ResolversObject<{
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  claimed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  personId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  zip?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PersonEventResolvers<ContextType = ServerContext, ParentType extends ResolversParentTypes['PersonEvent'] = ResolversParentTypes['PersonEvent']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  eventId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  eventNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hostClub?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  locationCity?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  locationState?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  trialDates?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  trialSite?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PersonRunResolvers<ContextType = ServerContext, ParentType extends ResolversParentTypes['PersonRun'] = ResolversParentTypes['PersonRun']> = ResolversObject<{
  agilityClass?: Resolver<ResolversTypes['AgilityClass'], ParentType, ContextType>;
  callName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deleted?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  dogId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  group?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  jumpHeight?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  level?: Resolver<Maybe<ResolversTypes['AgilityAbility']>, ParentType, ContextType>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  personName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  preferred?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  qualified?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  runId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  trialId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = ServerContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  getEvent?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType, RequireFields<QueryGetEventArgs, 'eventId'>>;
  getEventTrial?: Resolver<Maybe<ResolversTypes['EventTrial']>, ParentType, ContextType, RequireFields<QueryGetEventTrialArgs, 'eventId' | 'trialId'>>;
  getEventTrials?: Resolver<Maybe<Array<Maybe<ResolversTypes['EventTrial']>>>, ParentType, ContextType, RequireFields<QueryGetEventTrialsArgs, 'eventId'>>;
  getPersonByEmail?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType, RequireFields<QueryGetPersonByEmailArgs, 'email'>>;
  getPersonById?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType, RequireFields<QueryGetPersonByIdArgs, 'personId'>>;
  getPersonDogs?: Resolver<Maybe<Array<Maybe<ResolversTypes['Dog']>>>, ParentType, ContextType, RequireFields<QueryGetPersonDogsArgs, 'personId'>>;
  getPersonEvent?: Resolver<Maybe<ResolversTypes['PersonEvent']>, ParentType, ContextType, RequireFields<QueryGetPersonEventArgs, 'eventId' | 'personId'>>;
  getPersonEvents?: Resolver<Maybe<Array<Maybe<ResolversTypes['PersonEvent']>>>, ParentType, ContextType, RequireFields<QueryGetPersonEventsArgs, 'personId'>>;
  getTrial?: Resolver<Maybe<ResolversTypes['Trial']>, ParentType, ContextType, RequireFields<QueryGetTrialArgs, 'trialId'>>;
  getTrialRuns?: Resolver<Maybe<Array<Maybe<ResolversTypes['Run']>>>, ParentType, ContextType, RequireFields<QueryGetTrialRunsArgs, 'trialId'>>;
  getTrialRunsPaginated?: Resolver<Maybe<ResolversTypes['PaginatedRunResponse']>, ParentType, ContextType, RequireFields<QueryGetTrialRunsPaginatedArgs, 'trialId'>>;
  searchPerson?: Resolver<Maybe<Array<Maybe<ResolversTypes['Person']>>>, ParentType, ContextType, RequireFields<QuerySearchPersonArgs, 'query'>>;
}>;

export type RunResolvers<ContextType = ServerContext, ParentType extends ResolversParentTypes['Run'] = ResolversParentTypes['Run']> = ResolversObject<{
  agilityClass?: Resolver<ResolversTypes['AgilityClass'], ParentType, ContextType>;
  armband?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  callName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  courseLength?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deleted?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  dogId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  excusal?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  failure?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  group?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  jumpHeight?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  level?: Resolver<Maybe<ResolversTypes['AgilityAbility']>, ParentType, ContextType>;
  obstacles?: Resolver<Maybe<Array<Maybe<ResolversTypes['Boolean']>>>, ParentType, ContextType>;
  paid?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  personName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  points?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  preferred?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  qualified?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  rank?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  refusal?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  runId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  score?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sendBonus?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  table?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  time?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  timeDeduction?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  trialId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  wrongCourse?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RunViewResolvers<ContextType = ServerContext, ParentType extends ResolversParentTypes['RunView'] = ResolversParentTypes['RunView']> = ResolversObject<{
  agilityClass?: Resolver<ResolversTypes['AgilityClass'], ParentType, ContextType>;
  armband?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  courseLength?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deleted?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  dog?: Resolver<Maybe<ResolversTypes['Dog']>, ParentType, ContextType>;
  excusal?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  failure?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  group?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  jumpHeight?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  level?: Resolver<Maybe<ResolversTypes['AgilityAbility']>, ParentType, ContextType>;
  obstacles?: Resolver<Maybe<Array<Maybe<ResolversTypes['Boolean']>>>, ParentType, ContextType>;
  paid?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  person?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType>;
  points?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  preferred?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  qualified?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  rank?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  refusal?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  runId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  score?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sendBonus?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  table?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  time?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  timeDeduction?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  trialId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  wrongCourse?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ScheduleRunResolvers<ContextType = ServerContext, ParentType extends ResolversParentTypes['ScheduleRun'] = ResolversParentTypes['ScheduleRun']> = ResolversObject<{
  agilityClass?: Resolver<ResolversTypes['AgilityClass'], ParentType, ContextType>;
  callName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dogId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  group?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  jumpHeight?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  level?: Resolver<Maybe<ResolversTypes['AgilityAbility']>, ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  personName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  preferred?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  runId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  trialId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TrialResolvers<ContextType = ServerContext, ParentType extends ResolversParentTypes['Trial'] = ResolversParentTypes['Trial']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  eventId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  trialDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  trialId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = ServerContext> = ResolversObject<{
  Ability?: AbilityResolvers<ContextType>;
  Dog?: DogResolvers<ContextType>;
  Event?: EventResolvers<ContextType>;
  EventTrial?: EventTrialResolvers<ContextType>;
  Judge?: JudgeResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  PaginatedRunResponse?: PaginatedRunResponseResolvers<ContextType>;
  Person?: PersonResolvers<ContextType>;
  PersonEvent?: PersonEventResolvers<ContextType>;
  PersonRun?: PersonRunResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Run?: RunResolvers<ContextType>;
  RunView?: RunViewResolvers<ContextType>;
  ScheduleRun?: ScheduleRunResolvers<ContextType>;
  Trial?: TrialResolvers<ContextType>;
}>;

export type DirectiveResolvers<ContextType = ServerContext> = ResolversObject<{
  auth?: AuthDirectiveResolver<any, any, ContextType>;
}>;
