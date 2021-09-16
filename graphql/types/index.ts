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

export type AddEventTrial = {
  eventId: Scalars['String'];
  akcTrialNumber?: Maybe<Scalars['String']>;
  trialDate?: Maybe<Scalars['String']>;
  onlineEntries?: Maybe<Scalars['Int']>;
  mailEntries?: Maybe<Scalars['Int']>;
  standardClass?: Maybe<Scalars['Boolean']>;
  standardAbility?: Maybe<Array<Maybe<Scalars['String']>>>;
  standardPreferred?: Maybe<Array<Maybe<Scalars['String']>>>;
  jumpersClass?: Maybe<Scalars['Boolean']>;
  jumpersAbility?: Maybe<Array<Maybe<Scalars['String']>>>;
  jumpersPreferred?: Maybe<Array<Maybe<Scalars['String']>>>;
  fastClass?: Maybe<Scalars['Boolean']>;
  fastAbility?: Maybe<Array<Maybe<Scalars['String']>>>;
  fastPreferred?: Maybe<Array<Maybe<Scalars['String']>>>;
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
  akcPrefix?: Maybe<Scalars['String']>;
  akcSuffix?: Maybe<Scalars['String']>;
  breed?: Maybe<Scalars['String']>;
  dob?: Maybe<Scalars['String']>;
  jumpHeight?: Maybe<Scalars['Int']>;
  sex?: Maybe<Sex>;
  deleted?: Maybe<Scalars['Boolean']>;
};

export type DogInput = {
  callName: Scalars['String'];
  akcNumber?: Maybe<Scalars['String']>;
  akcName?: Maybe<Scalars['String']>;
  akcPrefix?: Maybe<Scalars['String']>;
  akcSuffix?: Maybe<Scalars['String']>;
  breed?: Maybe<Scalars['String']>;
  dob?: Maybe<Scalars['String']>;
  jumpHeight?: Maybe<Scalars['Int']>;
  sex?: Maybe<Sex>;
  deleted?: Maybe<Scalars['Boolean']>;
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
  standardAbility?: Maybe<Array<Maybe<Scalars['String']>>>;
  standardPreferred?: Maybe<Array<Maybe<Scalars['String']>>>;
  jumpersClass?: Maybe<Scalars['Boolean']>;
  jumpersAbility?: Maybe<Array<Maybe<Scalars['String']>>>;
  jumpersPreferred?: Maybe<Array<Maybe<Scalars['String']>>>;
  fastClass?: Maybe<Scalars['Boolean']>;
  fastAbility?: Maybe<Array<Maybe<Scalars['String']>>>;
  fastPreferred?: Maybe<Array<Maybe<Scalars['String']>>>;
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
};


export type MutationAddPersonArgs = {
  data?: Maybe<PersonInput>;
};


export type MutationAddDogArgs = {
  personId: Scalars['String'];
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

export type Person = {
  __typename?: 'Person';
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  personId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
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
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  _empty?: Maybe<Scalars['String']>;
  getPersonById?: Maybe<Person>;
  getPersonEvents?: Maybe<Array<Maybe<PersonEvent>>>;
  getPersonEvent?: Maybe<PersonEvent>;
  getPersonByEmail?: Maybe<Person>;
  getPersonDogs?: Maybe<Array<Maybe<Dog>>>;
  getEvent?: Maybe<Event>;
  getEventTrials?: Maybe<Array<Maybe<EventTrial>>>;
  getEventTrial?: Maybe<EventTrial>;
  getTrial?: Maybe<Trial>;
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
  standardAbility?: Maybe<Array<Maybe<Scalars['String']>>>;
  standardPreferred?: Maybe<Array<Maybe<Scalars['String']>>>;
  jumpersClass?: Maybe<Scalars['Boolean']>;
  jumpersAbility?: Maybe<Array<Maybe<Scalars['String']>>>;
  jumpersPreferred?: Maybe<Array<Maybe<Scalars['String']>>>;
  fastClass?: Maybe<Scalars['Boolean']>;
  fastAbility?: Maybe<Array<Maybe<Scalars['String']>>>;
  fastPreferred?: Maybe<Array<Maybe<Scalars['String']>>>;
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
  AddEventTrial: AddEventTrial;
  String: ResolverTypeWrapper<Scalars['String']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  AddTrial: AddTrial;
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
  Query: ResolverTypeWrapper<{}>;
  Sex: Sex;
  Trial: ResolverTypeWrapper<Trial>;
  UpdateEventInput: UpdateEventInput;
  UpdateEventTrial: UpdateEventTrial;
  UpdateTrial: UpdateTrial;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  AddEventTrial: AddEventTrial;
  String: Scalars['String'];
  Int: Scalars['Int'];
  Boolean: Scalars['Boolean'];
  AddTrial: AddTrial;
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
  Query: {};
  Trial: Trial;
  UpdateEventInput: UpdateEventInput;
  UpdateEventTrial: UpdateEventTrial;
  UpdateTrial: UpdateTrial;
}>;

export type DogResolvers<ContextType = any, ParentType extends ResolversParentTypes['Dog'] = ResolversParentTypes['Dog']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  dogId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  callName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  akcNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  akcName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  akcPrefix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  akcSuffix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  breed?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dob?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  jumpHeight?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sex?: Resolver<Maybe<ResolversTypes['Sex']>, ParentType, ContextType>;
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
  standardAbility?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  standardPreferred?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  jumpersClass?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  jumpersAbility?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  jumpersPreferred?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  fastClass?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  fastAbility?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  fastPreferred?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  t2bClass?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  premierStandard?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  premierJumpers?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  runLimit?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  _empty?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  addPerson?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType, RequireFields<MutationAddPersonArgs, never>>;
  addDog?: Resolver<Maybe<ResolversTypes['Dog']>, ParentType, ContextType, RequireFields<MutationAddDogArgs, 'personId' | 'dog'>>;
  updateDog?: Resolver<Maybe<ResolversTypes['Dog']>, ParentType, ContextType, RequireFields<MutationUpdateDogArgs, 'personId' | 'dogId' | 'dog'>>;
  removeDog?: Resolver<Maybe<ResolversTypes['Dog']>, ParentType, ContextType, RequireFields<MutationRemoveDogArgs, 'personId' | 'dogId'>>;
  addEvent?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType, RequireFields<MutationAddEventArgs, never>>;
  updateEvent?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType, RequireFields<MutationUpdateEventArgs, 'eventId' | 'updatedEvent' | 'personId'>>;
  addEventTrial?: Resolver<Maybe<ResolversTypes['EventTrial']>, ParentType, ContextType, RequireFields<MutationAddEventTrialArgs, 'eventTrial'>>;
  updateEventTrial?: Resolver<Maybe<ResolversTypes['EventTrial']>, ParentType, ContextType, RequireFields<MutationUpdateEventTrialArgs, 'trialId' | 'eventId' | 'eventTrial'>>;
}>;

export type PersonResolvers<ContextType = any, ParentType extends ResolversParentTypes['Person'] = ResolversParentTypes['Person']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  personId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  _empty?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  getPersonById?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType, RequireFields<QueryGetPersonByIdArgs, 'personId'>>;
  getPersonEvents?: Resolver<Maybe<Array<Maybe<ResolversTypes['PersonEvent']>>>, ParentType, ContextType, RequireFields<QueryGetPersonEventsArgs, 'personId'>>;
  getPersonEvent?: Resolver<Maybe<ResolversTypes['PersonEvent']>, ParentType, ContextType, RequireFields<QueryGetPersonEventArgs, 'personId' | 'eventId'>>;
  getPersonByEmail?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType, RequireFields<QueryGetPersonByEmailArgs, 'email'>>;
  getPersonDogs?: Resolver<Maybe<Array<Maybe<ResolversTypes['Dog']>>>, ParentType, ContextType, RequireFields<QueryGetPersonDogsArgs, 'personId'>>;
  getEvent?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType, RequireFields<QueryGetEventArgs, 'eventId'>>;
  getEventTrials?: Resolver<Maybe<Array<Maybe<ResolversTypes['EventTrial']>>>, ParentType, ContextType, RequireFields<QueryGetEventTrialsArgs, 'eventId'>>;
  getEventTrial?: Resolver<Maybe<ResolversTypes['EventTrial']>, ParentType, ContextType, RequireFields<QueryGetEventTrialArgs, 'trialId' | 'eventId'>>;
  getTrial?: Resolver<Maybe<ResolversTypes['Trial']>, ParentType, ContextType, RequireFields<QueryGetTrialArgs, 'trialId'>>;
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
  Dog?: DogResolvers<ContextType>;
  Event?: EventResolvers<ContextType>;
  EventTrial?: EventTrialResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Person?: PersonResolvers<ContextType>;
  PersonEvent?: PersonEventResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Trial?: TrialResolvers<ContextType>;
}>;


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
