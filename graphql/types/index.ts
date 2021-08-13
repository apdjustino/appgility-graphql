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

export type CreateNewEventInput = {
  name: Scalars['String'];
  locationCity: Scalars['String'];
  locationState: Scalars['String'];
  trialSite?: Maybe<Scalars['String']>;
  hostClub?: Maybe<Scalars['String']>;
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
  registrationEnabled?: Maybe<Scalars['Boolean']>;
  registrationCutoff?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  _empty?: Maybe<Scalars['String']>;
  addPerson?: Maybe<Person>;
  addEvent?: Maybe<Event>;
  updateEvent?: Maybe<Event>;
};


export type MutationAddPersonArgs = {
  data?: Maybe<PersonInput>;
};


export type MutationAddEventArgs = {
  data?: Maybe<CreateNewEventInput>;
  personId?: Maybe<Scalars['String']>;
};


export type MutationUpdateEventArgs = {
  eventId: Scalars['String'];
  updatedEvent: UpdateEventInput;
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
  getEvent?: Maybe<Event>;
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


export type QueryGetEventArgs = {
  eventId: Scalars['String'];
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
  registrationEnabled?: Maybe<Scalars['Boolean']>;
  registrationCutoff?: Maybe<Scalars['String']>;
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
  CreateNewEventInput: CreateNewEventInput;
  String: ResolverTypeWrapper<Scalars['String']>;
  Event: ResolverTypeWrapper<Event>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Mutation: ResolverTypeWrapper<{}>;
  Person: ResolverTypeWrapper<Person>;
  PersonEvent: ResolverTypeWrapper<PersonEvent>;
  PersonInput: PersonInput;
  Query: ResolverTypeWrapper<{}>;
  UpdateEventInput: UpdateEventInput;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  CreateNewEventInput: CreateNewEventInput;
  String: Scalars['String'];
  Event: Event;
  Int: Scalars['Int'];
  Boolean: Scalars['Boolean'];
  Mutation: {};
  Person: Person;
  PersonEvent: PersonEvent;
  PersonInput: PersonInput;
  Query: {};
  UpdateEventInput: UpdateEventInput;
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
  registrationEnabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  registrationCutoff?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  _empty?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  addPerson?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType, RequireFields<MutationAddPersonArgs, never>>;
  addEvent?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType, RequireFields<MutationAddEventArgs, never>>;
  updateEvent?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType, RequireFields<MutationUpdateEventArgs, 'eventId' | 'updatedEvent'>>;
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
  getEvent?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType, RequireFields<QueryGetEventArgs, 'eventId'>>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  Event?: EventResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Person?: PersonResolvers<ContextType>;
  PersonEvent?: PersonEventResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
}>;


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
