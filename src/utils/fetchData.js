import { api } from "../api/api"


export const fetchData  = async (path ,params={}) => {
    const response = await api.get(path ,{params})
    return response.data
}