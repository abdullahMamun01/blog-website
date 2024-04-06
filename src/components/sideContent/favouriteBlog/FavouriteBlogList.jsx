import { useEffect } from "react"

import useQueryData from "../../../hooks/useQueryData"
import { fetchData } from "../../../utils/fetchData"
import useAxios from "../../../hooks/useAxios"
import Loading from "../../loading/Loading"
import FavouriteBlogCard from "./FavouriteBlogCard"
import useAuthContext from "../../../hooks/useAuthContext"
import { api } from "../../../api/api"



const FavouriteBlogList = () => {
  const { axiosPrivate } = useAxios()
  const {auth} = useAuthContext()

  //fetch favourite blog fn
  const fetchFavouriteBlog = async () => {
    const response = await api.get('/blogs/favourites' , {headers : {Authorization : 'Bearer ' + auth.accessToken}})
    return response.data

  }
  const { data, isLoading,isError,error } = useQueryData([ 'favourites'], fetchFavouriteBlog())
  console.log(data)
  if (isLoading) {
    return <Loading />
  }

  if(isError){
    return <div className="text-red-600">{error.message}</div>
  }

  return (
    <div className="sidebar-card">
      <h3 className="text-slate-300 text-xl lg:text-2xl font-semibold">
        Your Favourites ❤️
      </h3>
      <ul className="space-y-5 my-5">
        {
          data?.blogs?.map(fav => <FavouriteBlogCard key={fav.id} {...fav}  /> )
        }
        
      </ul>

    </div>
  )
}

export default FavouriteBlogList