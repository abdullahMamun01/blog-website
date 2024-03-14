import useQueryData from "../../../hooks/useQueryData"
import { fetchData } from "../../../utils/fetchData"
import Loading from "../../loading/Loading"
import PopularBlogCard from "./PopularBlogCard"

const MostPopularBlogList = () => {

  const { data, isError, isLoading, error } = useQueryData(['popular-blogs'], fetchData("/blogs/popular"))

  if (isLoading) {
    return <Loading />
  }
  return (
    <div className="sidebar-card">
      <h3 className="text-slate-300 text-xl lg:text-2xl font-semibold">
        Most Popular 👍️
      </h3>
      <ul className="space-y-5 my-5">

        {data?.blogs?.map(blog => (
          <PopularBlogCard key={blog?.id}  {...blog} />
        ))}

      </ul>
    </div>
  )
}

export default MostPopularBlogList