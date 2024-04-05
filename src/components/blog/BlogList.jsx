
import useInfiniteQueryData from "../../hooks/useInfiniteQueryData"
import { fetchData } from "../../utils/fetchData"
import BlogCard from "./BlogCard"
import ReachedContent from '../../assets/reached-content.png'

import InfiniteScroll from "../feature/InfiniteScroll"
import Loading from "../loading/Loading"



const queryFunction = async ({ pageParam }) => {
    return fetchData('/blogs', { page: pageParam })
}

const BlogList = () => {
    const { fetchNextPage, isLoading, isFetching, isError, error, data, hasNextPage } = useInfiniteQueryData(['blogs'], queryFunction)
    if (isLoading) {
        return <div className="text-gray-100 text-lg">Loading.....</div>
    }
    if (isError) {
        return <div className="text-red-600 my-5">{error.message}</div>
    }
    const flatBlogs = data?.pages?.flatMap(blog => blog.blogs)

    console.log(hasNextPage)
    return (
        <div>

            <InfiniteScroll
                hasMore={hasNextPage}
                fetchNext={fetchNextPage}
            >
                {
                    flatBlogs?.map(blog => (<BlogCard key={blog.id} blog={blog} />))
                }

            </InfiniteScroll>
            {isFetching && <Loading />}
            {!hasNextPage &&
                <div className="text-center text-xl mt-5">
                    <span className="text-white text-bold opacity-45 ">
                        <img className="w-[300px] h-[300px] my-2 mx-auto" src={ReachedContent} />
                        You have discovered all the blogs,
                        <br/>
                        Please check back later for more blogs
                    </span>
            
                </div>}
        </div>
    )
}

export default BlogList