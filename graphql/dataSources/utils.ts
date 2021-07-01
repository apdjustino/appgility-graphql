import { Person } from "../types"
import Database from "./db/cosmos"

const jwks = require('jwks-rsa')
const jwt = require('jsonwebtoken')

export interface ValidationRules {
  allowedRoles: string[],
  personId?: string
}

const jwksClient = jwks({
  jwksUri: process.env.JWKS_URI,
  cache: true,
  rateLimit: true,
  jwksRequestsPerMinute: 5
})

const getKey = (header, callback) => {
  jwksClient.getSigningKey(header.kid, (err, key) => {
    const signingKey = key.publicKey || key.rsaPublicKey
    callback(null, signingKey)
  })
}

export const verify = (token: string, rules: ValidationRules) => {
  return new Promise((resolve, reject) => {
    if (token !== "" && token !== undefined && token !== null) {      
      jwt.verify(token, getKey, async (err, decoded) => {
        if (err) {
          reject(err)
        } else {
          const personId = decoded['https://graph.appgility.com/personId']
          try {
            const user = await getUser(personId)
            const { role } = user
            
            if (!rules.allowedRoles.includes(role)) {
              reject ('User does not have permission for this action')
            }
            
            if (rules.personId && rules.personId !== user.personId) {
              reject('User does not have permission for this action')
            }
            
            resolve(user)
          } catch (e) {
            console.log(e)
            reject('Error fetching user data')
          }
          
        }
      })
    } else {
      resolve('')
    }

  })
}

export const getUser = async (personId: string): Promise<Person> => {
  const db = new Database()
  let person: Person = {}
  try {
    person = await db.getItemById<Person>('person', personId, personId)
  } catch (e) {
    console.log(e)    
  }
  
  return person
}
