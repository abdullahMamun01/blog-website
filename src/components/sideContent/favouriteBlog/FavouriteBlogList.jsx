import { useEffect } from "react"

import useQueryData from "../../../hooks/useQueryData"
import { fetchData } from "../../../utils/fetchData"
import useAxios from "../../../hooks/useAxios"
import Loading from "../../loading/Loading"
import FavouriteBlogCard from "./FavouriteBlogCard"



const FavouriteBlogList = () => {
  const { axiosPrivate } = useAxios()

  //fetch favourite blog fn
  const fetchFavouriteBlog = async () => {
    const response = await axiosPrivate.get('/blogs/favourites')
    return response.data

  }
  const { data, isLoading,isError,error } = useQueryData(['favourite'], fetchFavouriteBlog())
  console.log(data)
  if (isLoading) {
    return <Loading />
  }

  if(isError){
    return <div className="text-red-600">{error.message}</div>
  }

  return (
    <div classNameName="sidebar-card">
      <h3 classNameName="text-slate-300 text-xl lg:text-2xl font-semibold">
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