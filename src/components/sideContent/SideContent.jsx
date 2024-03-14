import useAuthContext from "../../hooks/useAuthContext"
import FavouriteBlogList from "./favouriteBlog/FavouriteBlogList"
import MostPopularBlogList from "./popularBlog/MostPopularBlogList"


const SideContent = () => {
  const {auth} = useAuthContext()
  return (
    <div>
      <MostPopularBlogList/>
      {auth?.accessToken && <FavouriteBlogList/>}
    </div>
  )
}

export default SideContent