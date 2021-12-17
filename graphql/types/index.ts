import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Ability = {
  __typename?: 'Ability';
  label: Scalars['String'];
  value: Scalars['String'];
};

export type AbilityInput = {
  label: Scalars['String'];
  value: Scalars['String'];
};

export type AddEventTrial = {
  eventId: Scalars['String'];
  akcTrialNumber?: Maybe<Scalars['String']>;
  trialDate?: Maybe<Scalars['String']>;
  onlineEntries?: Maybe<Scalars['Int']>;
  mailEntries?: Maybe<Scalars['Int']>;
  standardClass?: Maybe<Scalars['Boolean']>;
  standardAbility?: Maybe<Array<Maybe<AbilityInput>>>;
  standardPreferred?: Maybe<Array<Maybe<AbilityInput>>>;
  jumpersClass?: Maybe<Scalars['Boolean']>;
  jumpersAbility?: Maybe<Array<Maybe<AbilityInput>>>;
  jumpersPreferred?: Maybe<Array<Maybe<AbilityInput>>>;
  fastClass?: Maybe<Scalars['Boolean']>;
  fastAbility?: Maybe<Array<Maybe<AbilityInput>>>;
  fastPreferred?: Maybe<Array<Maybe<AbilityInput>>>;
  t2bClass?: Maybe<Scalars['Boolean']>;
  premierStandard?: Maybe<Scalars['Boolean']>;
  premierJumpers?: Maybe<Scalars['Boolean']>;
  runLimit?: Maybe<Scalars['Int']>;
};

export type AddTrial = {
  eventId: Scalars['String'];
  akcTrialNumber?: Maybe<Scalars['String']>;
  trialDate?: Maybe<Scalars['String']>;
};

export enum AgilityAbility {
  Novice = 'NOVICE',
  Open = 'OPEN',
  Excellent = 'EXCELLENT',
  Masters = 'MASTERS'
}

export enum AgilityClass {
  Standard = 'STANDARD',
  Jumpers = 'JUMPERS',
  Fast = 'FAST',
  T2B = 'T2B',
  PremierStandard = 'PREMIER_STANDARD',
  PremierJumpers = 'PREMIER_JUMPERS'
}

export type AppMetadata = {
  personId?: Maybe<Scalars['String']>;
};

export type Auth0User = {
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  connection?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  app_metadata?: Maybe<AppMetadata>;
};

export type CreateNewEventInput = {
  name: Scalars['String'];
  locationCity: Scalars['String'];
  locationState: Scalars['String'];
  trialSite?: Maybe<Scalars['String']>;
  hostClub?: Maybe<Scalars['String']>;
};

export type Dog = {
  __typename?: 'Dog';
  id: Scalars['String'];
  dogId: Scalars['String'];
  personId: Scalars['String'];
  type: Scalars['String'];
  callName: Scalars['String'];
  akcNumber?: Maybe<Scalars['String']>;
  akcName?: Maybe<Scalars['String']>;
  withersHeight?: Maybe<Scalars['String']>;
  needsMeasured?: Maybe<Scalars['Boolean']>;
  breed?: Maybe<Scalars['String']>;
  variety?: Maybe<Scalars['String']>;
  placeOfBirth?: Maybe<Scalars['String']>;
  dob?: Maybe<Scalars['String']>;
  jumpHeight?: Maybe<Scalars['String']>;
  sex?: Maybe<Sex>;
  breeder?: Maybe<Scalars['String']>;
  sire?: Maybe<Scalars['String']>;
  dam?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
};

export type DogInput = {
  callName: Scalars['String'];
  akcNumber?: Maybe<Scalars['String']>;
  akcName?: Maybe<Scalars['String']>;
  withersHeight?: Maybe<Scalars['String']>;
  needsMeasured?: Maybe<Scalars['Boolean']>;
  breed?: Maybe<Scalars['String']>;
  variety?: Maybe<Scalars['String']>;
  placeOfBirth?: Maybe<Scalars['String']>;
  dob?: Maybe<Scalars['String']>;
  jumpHeight?: Maybe<Scalars['String']>;
  sex?: Maybe<Sex>;
  breeder?: Maybe<Scalars['String']>;
  sire?: Maybe<Scalars['String']>;
  dam?: Maybe<Scalars['String']>;
};

export type Event = {
  __typename?: 'Event';
  id: Scalars['String'];
  eventId: Scalars['String'];
  type: Scalars['String'];
  name: Scalars['String'];
  locationCity: Scalars['String'];
  locationState: Scalars['String'];
  status: Scalars['String'];
  trialSite?: Maybe<Scalars['String']>;
  hostClub?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  altPrice?: Maybe<Scalars['Int']>;
  premiumLink?: Maybe<Scalars['String']>;
  openingDate?: Maybe<Scalars['String']>;
  closingDate?: Maybe<Scalars['String']>;
  trialChairName?: Maybe<Scalars['String']>;
  trialChairEmail?: Maybe<Scalars['String']>;
  trialChairPhone?: Maybe<Scalars['String']>;
};

export type EventTrial = {
  __typename?: 'EventTrial';
  id: Scalars['String'];
  trialId: Scalars['String'];
  eventId: Scalars['String'];
  type: Scalars['String'];
  akcTrialNumber?: Maybe<Scalars['String']>;
  trialDate?: Maybe<Scalars['String']>;
  onlineEntries?: Maybe<Scalars['Int']>;
  mailEntries?: Maybe<Scalars['Int']>;
  standardClass?: Maybe<Scalars['Boolean']>;
  standardAbility?: Maybe<Array<Maybe<Ability>>>;
  standardPreferred?: Maybe<Array<Maybe<Ability>>>;
  jumpersClass?: Maybe<Scalars['Boolean']>;
  jumpersAbility?: Maybe<Array<Maybe<Ability>>>;
  jumpersPreferred?: Maybe<Array<Maybe<Ability>>>;
  fastClass?: Maybe<Scalars['Boolean']>;
  fastAbility?: Maybe<Array<Maybe<Ability>>>;
  fastPreferred?: Maybe<Array<Maybe<Ability>>>;
  t2bClass?: Maybe<Scalars['Boolean']>;
  premierStandard?: Maybe<Scalars['Boolean']>;
  premierJumpers?: Maybe<Scalars['Boolean']>;
  runLimit?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  _empty?: Maybe<Scalars['String']>;
  addPerson?: Maybe<Person>;
  addDog?: Maybe<Dog>;
  updateDog?: Maybe<Dog>;
  removeDog?: Maybe<Dog>;
  addEvent?: Maybe<Event>;
  updateEvent?: Maybe<Event>;
  addEventTrial?: Maybe<EventTrial>;
  updateEventTrial?: Maybe<EventTrial>;
  addRun?: Maybe<RunView>;
};


export type MutationAddPersonArgs = {
  data?: Maybe<PersonInput>;
  password?: Maybe<Scalars['String']>;
};


export type MutationAddDogArgs = {
  personId: Scalars['String'];
  secretaryId: Scalars['String'];
  dog: DogInput;
};


export type MutationUpdateDogArgs = {
  personId: Scalars['String'];
  dogId: Scalars['String'];
  dog: DogInput;
};


export type MutationRemoveDogArgs = {
  personId: Scalars['String'];
  dogId: Scalars['String'];
};


export type MutationAddEventArgs = {
  data?: Maybe<CreateNewEventInput>;
  personId?: Maybe<Scalars['String']>;
};


export type MutationUpdateEventArgs = {
  eventId: Scalars['String'];
  updatedEvent: UpdateEventInput;
  personId: Scalars['String'];
};


export type MutationAddEventTrialArgs = {
  eventTrial: AddEventTrial;
};


export type MutationUpdateEventTrialArgs = {
  trialId: Scalars['String'];
  eventId: Scalars['String'];
  eventTrial: UpdateEventTrial;
};


export type MutationAddRunArgs = {
  eventId: Scalars['String'];
  trialId: Scalars['String'];
  personId: Scalars['String'];
  dogId: Scalars['String'];
  run: RunInput;
};

export type Person = {
  __typename?: 'Person';
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  personId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
  claimed?: Maybe<Scalars['Boolean']>;
};

export type PersonEvent = {
  __typename?: 'PersonEvent';
  id: Scalars['String'];
  eventId: Scalars['String'];
  personId: Scalars['String'];
  type: Scalars['String'];
  name: Scalars['String'];
  locationCity: Scalars['String'];
  locationState: Scalars['String'];
  status: Scalars['String'];
  trialSite?: Maybe<Scalars['String']>;
};

export type PersonEventInput = {
  id: Scalars['String'];
  eventId: Scalars['String'];
  personId: Scalars['String'];
  type: Scalars['String'];
  name: Scalars['String'];
  locationCity: Scalars['String'];
  locationState: Scalars['String'];
  status: Scalars['String'];
  trialSite?: Maybe<Scalars['String']>;
};

export type PersonInput = {
  id?: Maybe<Scalars['String']>;
  personId?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  email: Scalars['String'];
  role: Scalars['String'];
  phone: Scalars['String'];
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
  claimed?: Maybe<Scalars['Boolean']>;
};

export type PersonRun = {
  __typename?: 'PersonRun';
  id: Scalars['String'];
  type: Scalars['String'];
  runId: Scalars['String'];
  personId: Scalars['String'];
  dogId: Scalars['String'];
  trialId: Scalars['String'];
  agilityClass: AgilityClass;
  level?: Maybe<AgilityAbility>;
  jumpHeight: Scalars['Int'];
  preferred: Scalars['Boolean'];
  group?: Maybe<Scalars['String']>;
  qualified?: Maybe<Scalars['Boolean']>;
  deleted: Scalars['Boolean'];
};

export type Query = {
  __typename?: 'Query';
  _empty?: Maybe<Scalars['String']>;
  getPersonById?: Maybe<Person>;
  getPersonEvents?: Maybe<Array<Maybe<PersonEvent>>>;
  getPersonEvent?: Maybe<PersonEvent>;
  getPersonByEmail?: Maybe<Person>;
  getPersonDogs?: Maybe<Array<Maybe<Dog>>>;
  searchPerson?: Maybe<Array<Maybe<Person>>>;
  getEvent?: Maybe<Event>;
  getEventTrials?: Maybe<Array<Maybe<EventTrial>>>;
  getEventTrial?: Maybe<EventTrial>;
  getTrial?: Maybe<Trial>;
  getTrialRuns?: Maybe<Array<Maybe<RunView>>>;
};


export type QueryGetPersonByIdArgs = {
  personId: Scalars['String'];
};


export type QueryGetPersonEventsArgs = {
  personId: Scalars['String'];
};


export type QueryGetPersonEventArgs = {
  personId: Scalars['String'];
  eventId: Scalars['String'];
};


export type QueryGetPersonByEmailArgs = {
  email: Scalars['String'];
};


export type QueryGetPersonDogsArgs = {
  personId: Scalars['String'];
};


export type QuerySearchPersonArgs = {
  query: Scalars['String'];
};


export type QueryGetEventArgs = {
  eventId: Scalars['String'];
};


export type QueryGetEventTrialsArgs = {
  eventId: Scalars['String'];
};


export type QueryGetEventTrialArgs = {
  trialId: Scalars['String'];
  eventId: Scalars['String'];
};


export type QueryGetTrialArgs = {
  trialId: Scalars['String'];
};


export type QueryGetTrialRunsArgs = {
  trialId: Scalars['String'];
};

export type Run = {
  __typename?: 'Run';
  id: Scalars['String'];
  type: Scalars['String'];
  runId: Scalars['String'];
  trialId: Scalars['String'];
  personId: Scalars['String'];
  dogId: Scalars['String'];
  agilityClass: AgilityClass;
  level?: Maybe<AgilityAbility>;
  preferred: Scalars['Boolean'];
  jumpHeight: Scalars['Int'];
  group?: Maybe<Scalars['String']>;
  armband?: Maybe<Scalars['String']>;
  courseLength?: Maybe<Scalars['Int']>;
  score?: Maybe<Scalars['Int']>;
  timeDeduction?: Maybe<Scalars['Int']>;
  time?: Maybe<Scalars['Float']>;
  qualified?: Maybe<Scalars['Boolean']>;
  points?: Maybe<Scalars['Int']>;
  sendBonus?: Maybe<Scalars['Boolean']>;
  wrongCourse?: Maybe<Scalars['Int']>;
  excusal?: Maybe<Scalars['Int']>;
  refusal?: Maybe<Scalars['Int']>;
  failure?: Maybe<Scalars['Int']>;
  table?: Maybe<Scalars['Int']>;
  rank?: Maybe<Scalars['Int']>;
  obstacles?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  paid?: Maybe<Scalars['Boolean']>;
  deleted: Scalars['Boolean'];
};

export type RunInput = {
  agilityClass: AgilityClass;
  level?: Maybe<AgilityAbility>;
  preferred: Scalars['Boolean'];
  jumpHeight: Scalars['Int'];
  group?: Maybe<Scalars['String']>;
  armband?: Maybe<Scalars['String']>;
  courseLength?: Maybe<Scalars['Int']>;
  score?: Maybe<Scalars['Int']>;
  timeDeduction?: Maybe<Scalars['Float']>;
  time?: Maybe<Scalars['Float']>;
  qualified?: Maybe<Scalars['Boolean']>;
  points?: Maybe<Scalars['Int']>;
  sendBonus?: Maybe<Scalars['Boolean']>;
  wrongCourse?: Maybe<Scalars['Int']>;
  excusal?: Maybe<Scalars['Int']>;
  refusal?: Maybe<Scalars['Int']>;
  failure?: Maybe<Scalars['Int']>;
  table?: Maybe<Scalars['Int']>;
  rank?: Maybe<Scalars['Int']>;
  obstacles?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  paid?: Maybe<Scalars['Boolean']>;
};

export type RunView = {
  __typename?: 'RunView';
  id: Scalars['String'];
  type: Scalars['String'];
  runId: Scalars['String'];
  trialId: Scalars['String'];
  person: Person;
  dog: Dog;
  agilityClass: AgilityClass;
  level?: Maybe<AgilityAbility>;
  preferred: Scalars['Boolean'];
  jumpHeight: Scalars['Int'];
  group?: Maybe<Scalars['String']>;
  armband?: Maybe<Scalars['String']>;
  courseLength?: Maybe<Scalars['Int']>;
  score?: Maybe<Scalars['Int']>;
  timeDeduction?: Maybe<Scalars['Int']>;
  time?: Maybe<Scalars['Float']>;
  qualified?: Maybe<Scalars['Boolean']>;
  points?: Maybe<Scalars['Int']>;
  sendBonus?: Maybe<Scalars['Boolean']>;
  wrongCourse?: Maybe<Scalars['Int']>;
  excusal?: Maybe<Scalars['Int']>;
  refusal?: Maybe<Scalars['Int']>;
  failure?: Maybe<Scalars['Int']>;
  table?: Maybe<Scalars['Int']>;
  rank?: Maybe<Scalars['Int']>;
  obstacles?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  paid?: Maybe<Scalars['Boolean']>;
  deleted: Scalars['Boolean'];
};

export type ScheduleRun = {
  __typename?: 'ScheduleRun';
  id: Scalars['String'];
  runId: Scalars['String'];
  type: Scalars['String'];
  personId: Scalars['String'];
  dogId: Scalars['String'];
  trialId: Scalars['String'];
  agilityClass: AgilityClass;
  level?: Maybe<AgilityAbility>;
  preferred: Scalars['Boolean'];
  parent?: Maybe<Scalars['String']>;
  jumpHeight: Scalars['Int'];
  group?: Maybe<Scalars['String']>;
};

export enum Sex {
  Male = 'MALE',
  Female = 'FEMALE'
}

export type Trial = {
  __typename?: 'Trial';
  id: Scalars['String'];
  trialId: Scalars['String'];
  eventId: Scalars['String'];
  type: Scalars['String'];
  akcTrialNumber?: Maybe<Scalars['String']>;
  trialDate?: Maybe<Scalars['String']>;
};

export type UpdateEventInput = {
  id: Scalars['String'];
  eventId: Scalars['String'];
  type: Scalars['String'];
  name: Scalars['String'];
  locationCity: Scalars['String'];
  locationState: Scalars['String'];
  status: Scalars['String'];
  trialSite?: Maybe<Scalars['String']>;
  hostClub?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  altPrice?: Maybe<Scalars['Int']>;
  premiumLink?: Maybe<Scalars['String']>;
  openingDate?: Maybe<Scalars['String']>;
  closingDate?: Maybe<Scalars['String']>;
  trialChairName?: Maybe<Scalars['String']>;
  trialChairEmail?: Maybe<Scalars['String']>;
  trialChairPhone?: Maybe<Scalars['String']>;
};

export type UpdateEventTrial = {
  id: Scalars['String'];
  trialId: Scalars['String'];
  eventId: Scalars['String'];
  type: Scalars['String'];
  akcTrialNumber?: Maybe<Scalars['String']>;
  trialDate?: Maybe<Scalars['String']>;
  onlineEntries?: Maybe<Scalars['Int']>;
  mailEntries?: Maybe<Scalars['Int']>;
  standardClass?: Maybe<Scalars['Boolean']>;
  standardAbility?: Maybe<Array<Maybe<AbilityInput>>>;
  standardPreferred?: Maybe<Array<Maybe<AbilityInput>>>;
  jumpersClass?: Maybe<Scalars['Boolean']>;
  jumpersAbility?: Maybe<Array<Maybe<AbilityInput>>>;
  jumpersPreferred?: Maybe<Array<Maybe<AbilityInput>>>;
  fastClass?: Maybe<Scalars['Boolean']>;
  fastAbility?: Maybe<Array<Maybe<AbilityInput>>>;
  fastPreferred?: Maybe<Array<Maybe<AbilityInput>>>;
  t2bClass?: Maybe<Scalars['Boolean']>;
  premierStandard?: Maybe<Scalars['Boolean']>;
  premierJumpers?: Maybe<Scalars['Boolean']>;
  runLimit?: Maybe<Scalars['Int']>;
};

export type UpdateTrial = {
  id: Scalars['String'];
  trialId: Scalars['String'];
  eventId: Scalars['String'];
  type: Scalars['String'];
  akcTrialNumber?: Maybe<Scalars['String']>;
  trialDate?: Maybe<Scalars['String']>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

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
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

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
  String: ResolverTypeWrapper<Scalars['String']>;
  AbilityInput: AbilityInput;
  AddEventTrial: AddEventTrial;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  AddTrial: AddTrial;
  AgilityAbility: AgilityAbility;
  AgilityClass: AgilityClass;
  AppMetadata: AppMetadata;
  Auth0User: Auth0User;
  CreateNewEventInput: CreateNewEventInput;
  Dog: ResolverTypeWrapper<Dog>;
  DogInput: DogInput;
  Event: ResolverTypeWrapper<Event>;
  EventTrial: ResolverTypeWrapper<EventTrial>;
  Mutation: ResolverTypeWrapper<{}>;
  Person: ResolverTypeWrapper<Person>;
  PersonEvent: ResolverTypeWrapper<PersonEvent>;
  PersonEventInput: PersonEventInput;
  PersonInput: PersonInput;
  PersonRun: ResolverTypeWrapper<PersonRun>;
  Query: ResolverTypeWrapper<{}>;
  Run: ResolverTypeWrapper<Run>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  RunInput: RunInput;
  RunView: ResolverTypeWrapper<RunView>;
  ScheduleRun: ResolverTypeWrapper<ScheduleRun>;
  Sex: Sex;
  Trial: ResolverTypeWrapper<Trial>;
  UpdateEventInput: UpdateEventInput;
  UpdateEventTrial: UpdateEventTrial;
  UpdateTrial: UpdateTrial;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Ability: Ability;
  String: Scalars['String'];
  AbilityInput: AbilityInput;
  AddEventTrial: AddEventTrial;
  Int: Scalars['Int'];
  Boolean: Scalars['Boolean'];
  AddTrial: AddTrial;
  AppMetadata: AppMetadata;
  Auth0User: Auth0User;
  CreateNewEventInput: CreateNewEventInput;
  Dog: Dog;
  DogInput: DogInput;
  Event: Event;
  EventTrial: EventTrial;
  Mutation: {};
  Person: Person;
  PersonEvent: PersonEvent;
  PersonEventInput: PersonEventInput;
  PersonInput: PersonInput;
  PersonRun: PersonRun;
  Query: {};
  Run: Run;
  Float: Scalars['Float'];
  RunInput: RunInput;
  RunView: RunView;
  ScheduleRun: ScheduleRun;
  Trial: Trial;
  UpdateEventInput: UpdateEventInput;
  UpdateEventTrial: UpdateEventTrial;
  UpdateTrial: UpdateTrial;
}>;

export type AbilityResolvers<ContextType = any, ParentType extends ResolversParentTypes['Ability'] = ResolversParentTypes['Ability']> = ResolversObject<{
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DogResolvers<ContextType = any, ParentType extends ResolversParentTypes['Dog'] = ResolversParentTypes['Dog']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  dogId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  callName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  akcNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  akcName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  withersHeight?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  needsMeasured?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  breed?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  variety?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  placeOfBirth?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dob?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  jumpHeight?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sex?: Resolver<Maybe<ResolversTypes['Sex']>, ParentType, ContextType>;
  breeder?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sire?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dam?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deleted?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EventResolvers<ContextType = any, ParentType extends ResolversParentTypes['Event'] = ResolversParentTypes['Event']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  eventId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  locationCity?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  locationState?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  trialSite?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hostClub?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  altPrice?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  premiumLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  openingDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  closingDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  trialChairName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  trialChairEmail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  trialChairPhone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EventTrialResolvers<ContextType = any, ParentType extends ResolversParentTypes['EventTrial'] = ResolversParentTypes['EventTrial']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  trialId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  eventId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  akcTrialNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  trialDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  onlineEntries?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mailEntries?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  standardClass?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  standardAbility?: Resolver<Maybe<Array<Maybe<ResolversTypes['Ability']>>>, ParentType, ContextType>;
  standardPreferred?: Resolver<Maybe<Array<Maybe<ResolversTypes['Ability']>>>, ParentType, ContextType>;
  jumpersClass?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  jumpersAbility?: Resolver<Maybe<Array<Maybe<ResolversTypes['Ability']>>>, ParentType, ContextType>;
  jumpersPreferred?: Resolver<Maybe<Array<Maybe<ResolversTypes['Ability']>>>, ParentType, ContextType>;
  fastClass?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  fastAbility?: Resolver<Maybe<Array<Maybe<ResolversTypes['Ability']>>>, ParentType, ContextType>;
  fastPreferred?: Resolver<Maybe<Array<Maybe<ResolversTypes['Ability']>>>, ParentType, ContextType>;
  t2bClass?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  premierStandard?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  premierJumpers?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  runLimit?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  _empty?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  addPerson?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType, RequireFields<MutationAddPersonArgs, never>>;
  addDog?: Resolver<Maybe<ResolversTypes['Dog']>, ParentType, ContextType, RequireFields<MutationAddDogArgs, 'personId' | 'secretaryId' | 'dog'>>;
  updateDog?: Resolver<Maybe<ResolversTypes['Dog']>, ParentType, ContextType, RequireFields<MutationUpdateDogArgs, 'personId' | 'dogId' | 'dog'>>;
  removeDog?: Resolver<Maybe<ResolversTypes['Dog']>, ParentType, ContextType, RequireFields<MutationRemoveDogArgs, 'personId' | 'dogId'>>;
  addEvent?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType, RequireFields<MutationAddEventArgs, never>>;
  updateEvent?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType, RequireFields<MutationUpdateEventArgs, 'eventId' | 'updatedEvent' | 'personId'>>;
  addEventTrial?: Resolver<Maybe<ResolversTypes['EventTrial']>, ParentType, ContextType, RequireFields<MutationAddEventTrialArgs, 'eventTrial'>>;
  updateEventTrial?: Resolver<Maybe<ResolversTypes['EventTrial']>, ParentType, ContextType, RequireFields<MutationUpdateEventTrialArgs, 'trialId' | 'eventId' | 'eventTrial'>>;
  addRun?: Resolver<Maybe<ResolversTypes['RunView']>, ParentType, ContextType, RequireFields<MutationAddRunArgs, 'eventId' | 'trialId' | 'personId' | 'dogId' | 'run'>>;
}>;

export type PersonResolvers<ContextType = any, ParentType extends ResolversParentTypes['Person'] = ResolversParentTypes['Person']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  personId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  zip?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  claimed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PersonEventResolvers<ContextType = any, ParentType extends ResolversParentTypes['PersonEvent'] = ResolversParentTypes['PersonEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  eventId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  locationCity?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  locationState?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  trialSite?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PersonRunResolvers<ContextType = any, ParentType extends ResolversParentTypes['PersonRun'] = ResolversParentTypes['PersonRun']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  runId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  dogId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  trialId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  agilityClass?: Resolver<ResolversTypes['AgilityClass'], ParentType, ContextType>;
  level?: Resolver<Maybe<ResolversTypes['AgilityAbility']>, ParentType, ContextType>;
  jumpHeight?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  preferred?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  group?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  qualified?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  deleted?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  _empty?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  getPersonById?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType, RequireFields<QueryGetPersonByIdArgs, 'personId'>>;
  getPersonEvents?: Resolver<Maybe<Array<Maybe<ResolversTypes['PersonEvent']>>>, ParentType, ContextType, RequireFields<QueryGetPersonEventsArgs, 'personId'>>;
  getPersonEvent?: Resolver<Maybe<ResolversTypes['PersonEvent']>, ParentType, ContextType, RequireFields<QueryGetPersonEventArgs, 'personId' | 'eventId'>>;
  getPersonByEmail?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType, RequireFields<QueryGetPersonByEmailArgs, 'email'>>;
  getPersonDogs?: Resolver<Maybe<Array<Maybe<ResolversTypes['Dog']>>>, ParentType, ContextType, RequireFields<QueryGetPersonDogsArgs, 'personId'>>;
  searchPerson?: Resolver<Maybe<Array<Maybe<ResolversTypes['Person']>>>, ParentType, ContextType, RequireFields<QuerySearchPersonArgs, 'query'>>;
  getEvent?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType, RequireFields<QueryGetEventArgs, 'eventId'>>;
  getEventTrials?: Resolver<Maybe<Array<Maybe<ResolversTypes['EventTrial']>>>, ParentType, ContextType, RequireFields<QueryGetEventTrialsArgs, 'eventId'>>;
  getEventTrial?: Resolver<Maybe<ResolversTypes['EventTrial']>, ParentType, ContextType, RequireFields<QueryGetEventTrialArgs, 'trialId' | 'eventId'>>;
  getTrial?: Resolver<Maybe<ResolversTypes['Trial']>, ParentType, ContextType, RequireFields<QueryGetTrialArgs, 'trialId'>>;
  getTrialRuns?: Resolver<Maybe<Array<Maybe<ResolversTypes['RunView']>>>, ParentType, ContextType, RequireFields<QueryGetTrialRunsArgs, 'trialId'>>;
}>;

export type RunResolvers<ContextType = any, ParentType extends ResolversParentTypes['Run'] = ResolversParentTypes['Run']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  runId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  trialId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  dogId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  agilityClass?: Resolver<ResolversTypes['AgilityClass'], ParentType, ContextType>;
  level?: Resolver<Maybe<ResolversTypes['AgilityAbility']>, ParentType, ContextType>;
  preferred?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  jumpHeight?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  group?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  armband?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  courseLength?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  score?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  timeDeduction?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  time?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  qualified?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  points?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sendBonus?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  wrongCourse?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  excusal?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  refusal?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  failure?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  table?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  rank?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  obstacles?: Resolver<Maybe<Array<Maybe<ResolversTypes['Boolean']>>>, ParentType, ContextType>;
  paid?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  deleted?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RunViewResolvers<ContextType = any, ParentType extends ResolversParentTypes['RunView'] = ResolversParentTypes['RunView']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  runId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  trialId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  person?: Resolver<ResolversTypes['Person'], ParentType, ContextType>;
  dog?: Resolver<ResolversTypes['Dog'], ParentType, ContextType>;
  agilityClass?: Resolver<ResolversTypes['AgilityClass'], ParentType, ContextType>;
  level?: Resolver<Maybe<ResolversTypes['AgilityAbility']>, ParentType, ContextType>;
  preferred?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  jumpHeight?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  group?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  armband?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  courseLength?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  score?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  timeDeduction?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  time?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  qualified?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  points?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sendBonus?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  wrongCourse?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  excusal?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  refusal?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  failure?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  table?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  rank?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  obstacles?: Resolver<Maybe<Array<Maybe<ResolversTypes['Boolean']>>>, ParentType, ContextType>;
  paid?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  deleted?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ScheduleRunResolvers<ContextType = any, ParentType extends ResolversParentTypes['ScheduleRun'] = ResolversParentTypes['ScheduleRun']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  runId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  dogId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  trialId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  agilityClass?: Resolver<ResolversTypes['AgilityClass'], ParentType, ContextType>;
  level?: Resolver<Maybe<ResolversTypes['AgilityAbility']>, ParentType, ContextType>;
  preferred?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  jumpHeight?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  group?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TrialResolvers<ContextType = any, ParentType extends ResolversParentTypes['Trial'] = ResolversParentTypes['Trial']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  trialId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  eventId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  akcTrialNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  trialDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  Ability?: AbilityResolvers<ContextType>;
  Dog?: DogResolvers<ContextType>;
  Event?: EventResolvers<ContextType>;
  EventTrial?: EventTrialResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Person?: PersonResolvers<ContextType>;
  PersonEvent?: PersonEventResolvers<ContextType>;
  PersonRun?: PersonRunResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Run?: RunResolvers<ContextType>;
  RunView?: RunViewResolvers<ContextType>;
  ScheduleRun?: ScheduleRunResolvers<ContextType>;
  Trial?: TrialResolvers<ContextType>;
}>;


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
