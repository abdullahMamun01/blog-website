
import useInfiniteQueryData from "../../hooks/useInfiniteQueryData"
import { fetchData } from "../../utils/fetchData"
import BlogCard from "./BlogCard"

import InfiniteScroll from "../feature/InfiniteScroll"
import useAuthContext from "../../hooks/useAuthContext"
import EditBlog from "./EditBlog"
import useBlogContext from "../../hooks/useBlogContext"
import Loading from "../loading/Loading"



const queryFunction = async ({ pageParam }) => {
    return fetchData('/blogs', { page: pageParam })
}

const BlogList = () => {
    const { fetchNextPage, isLoading, isFetching,isError,error, data, hasNextPage } = useInfiniteQueryData(['blogs'], queryFunction)
    if (isLoading) {
        return <div className="text-gray-100 text-lg">Loading.....</div>
    }
    if(isError){
        return <div className="text-red-600 my-5">{error.message}</div>
    }
    const flatBlogs = data?.pages?.flatMap(blog => blog.blogs)
    const {state} = useBlogContext()
    console.log(hasNextPage)
    return (
        <div>
            {state.editModal.isOpen && <EditBlog/>}
            <InfiniteScroll
                hasMore={hasNextPage}
                fetchNext={fetchNextPage}
            >
                    {
                        flatBlogs?.map(blog => ( <BlogCard key={blog.id} blog={blog} /> ))
                    }
           
            </InfiniteScroll>
            {isFetching && <Loading />}
            {!hasNextPage && <div className="text-center text-sky-600 text-xl mt-5">No more blogs available</div>}
        </div>
    )
}

export default BlogList