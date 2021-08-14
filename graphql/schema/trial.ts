const { gql } = require('apollo-server-azure-functions')

const typeDef = gql`
  input AddTrial {
    eventId: String!,    
    akcTrialNumber: String,
    trialDate: String
  }

  input UpdateTrial {
    id: String!,
    trialId: String!,
    eventId: String!,
    type: String!,
    akcTrialNumber: String,
    trialDate: String
  }

  type Trial {
    id: String!,
    trialId: String!,
    eventId: String!,
    type: String!,
    akcTrialNumber: String,
    trialDate: String
  }
`

exports.TrialSchema = typeDef