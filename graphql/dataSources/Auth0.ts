import { RESTDataSource } from 'apollo-datasource-rest'
import { ApolloError } from "apollo-server-core"
import { Auth0User } from '../types'
import { v4 as uuid} from 'uuid'

class Auth0Api extends RESTDataSource {

  _grant_type: string = 'client_credentials'
  _client_id: string = process.env.AUTH0_CLIENT_ID
  _client_secret: string = process.env.AUTH0_CLIENT_SECRET
  _audience: string = 'https://dev-egx1hh70.us.auth0.com/api/v2/'
  
  constructor() {
    super()
    this.baseURL = 'https://dev-egx1hh70.us.auth0.com/'    
  }

  async getManagementToken() {    
    const data = await this.post('oauth/token', {
      grant_type: this._grant_type,
      client_id: this._client_id,
      client_secret: this._client_secret,
      audience: this._audience
    }, {
      headers: {'content-type': 'application/json'}
    })
      
    return data.access_token
  }

  async createNewUser(user: Auth0User) {    
    user.connection = 'Username-Password-Authentication'
    let token = ""
    try {
      token = await this.getManagementToken()    
    } catch (e) {
      throw new ApolloError(e.response.data.message)
    }
    
    try {
      const data = await this.post('api/v2/users', user, {
        headers: { 'Authorization': `Bearer ${token}`}
      })
  
      return data.user_id
    } catch (e) {
      throw new ApolloError(e.response.data.message);
    }
    

  }
}

export default Auth0Api