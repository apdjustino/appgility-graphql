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

export type CreateNewTrialInput = {
  name: Scalars['String'];
  startDate: Scalars['String'];
  locationCity: Scalars['String'];
  locationState: Scalars['String'];
  locationVenue?: Maybe<Scalars['String']>;
  hostClub?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  _empty?: Maybe<Scalars['String']>;
  addPerson?: Maybe<Person>;
  addPersonTrial?: Maybe<PersonTrial>;
  addTrial?: Maybe<Trial>;
};


export type MutationAddPersonArgs = {
  data?: Maybe<PersonInput>;
};


export type MutationAddPersonTrialArgs = {
  data?: Maybe<CreateNewTrialInput>;
  personId?: Maybe<Scalars['String']>;
  trialId?: Maybe<Scalars['String']>;
};


export type MutationAddTrialArgs = {
  data?: Maybe<CreateNewTrialInput>;
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

export type PersonInput = {
  id?: Maybe<Scalars['String']>;
  personId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
};

export type PersonTrial = {
  __typename?: 'PersonTrial';
  trialId: Scalars['String'];
  personId: Scalars['String'];
  type: Scalars['String'];
  name: Scalars['String'];
  startDate: Scalars['String'];
  endDate: Scalars['String'];
  locationCity: Scalars['String'];
  locationState: Scalars['String'];
  status: Scalars['String'];
  locationVenue?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  _empty?: Maybe<Scalars['String']>;
  getPersonById?: Maybe<Person>;
  getPersonTrials?: Maybe<Array<Maybe<PersonTrial>>>;
};


export type QueryGetPersonByIdArgs = {
  personId: Scalars['String'];
};


export type QueryGetPersonTrialsArgs = {
  personId: Scalars['String'];
};

export type Trial = {
  __typename?: 'Trial';
  trialId: Scalars['String'];
  type: Scalars['String'];
  name: Scalars['String'];
  startDate: Scalars['String'];
  endDate: Scalars['String'];
  locationCity: Scalars['String'];
  locationState: Scalars['String'];
  status: Scalars['String'];
  locationVenue?: Maybe<Scalars['String']>;
  hostClub?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  onlineEntryLimit?: Maybe<Scalars['Int']>;
  mailEntryLimit?: Maybe<Scalars['Int']>;
  premiumLink?: Maybe<Scalars['String']>;
  allowedClasses?: Maybe<Array<Maybe<Scalars['String']>>>;
  judges?: Maybe<Array<Maybe<Scalars['String']>>>;
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
  CreateNewTrialInput: CreateNewTrialInput;
  String: ResolverTypeWrapper<Scalars['String']>;
  Mutation: ResolverTypeWrapper<{}>;
  Person: ResolverTypeWrapper<Person>;
  PersonInput: PersonInput;
  PersonTrial: ResolverTypeWrapper<PersonTrial>;
  Query: ResolverTypeWrapper<{}>;
  Trial: ResolverTypeWrapper<Trial>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  CreateNewTrialInput: CreateNewTrialInput;
  String: Scalars['String'];
  Mutation: {};
  Person: Person;
  PersonInput: PersonInput;
  PersonTrial: PersonTrial;
  Query: {};
  Trial: Trial;
  Int: Scalars['Int'];
  Boolean: Scalars['Boolean'];
}>;

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  _empty?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  addPerson?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType, RequireFields<MutationAddPersonArgs, never>>;
  addPersonTrial?: Resolver<Maybe<ResolversTypes['PersonTrial']>, ParentType, ContextType, RequireFields<MutationAddPersonTrialArgs, never>>;
  addTrial?: Resolver<Maybe<ResolversTypes['Trial']>, ParentType, ContextType, RequireFields<MutationAddTrialArgs, never>>;
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

export type PersonTrialResolvers<ContextType = any, ParentType extends ResolversParentTypes['PersonTrial'] = ResolversParentTypes['PersonTrial']> = ResolversObject<{
  trialId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  personId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  startDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  endDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  locationCity?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  locationState?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  locationVenue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  _empty?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  getPersonById?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType, RequireFields<QueryGetPersonByIdArgs, 'personId'>>;
  getPersonTrials?: Resolver<Maybe<Array<Maybe<ResolversTypes['PersonTrial']>>>, ParentType, ContextType, RequireFields<QueryGetPersonTrialsArgs, 'personId'>>;
}>;

export type TrialResolvers<ContextType = any, ParentType extends ResolversParentTypes['Trial'] = ResolversParentTypes['Trial']> = ResolversObject<{
  trialId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  startDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  endDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  locationCity?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  locationState?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  locationVenue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hostClub?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  onlineEntryLimit?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mailEntryLimit?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  premiumLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  allowedClasses?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  judges?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  Mutation?: MutationResolvers<ContextType>;
  Person?: PersonResolvers<ContextType>;
  PersonTrial?: PersonTrialResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Trial?: TrialResolvers<ContextType>;
}>;


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
