import { api } from "./api"


export const loginUser = async (credential) => {

        const response = await api.post('/auth/login' , credential)
        return response.data
  
}