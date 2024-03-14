
import useInfiniteQueryData from "../../hooks/useInfiniteQueryData"
import { fetchData } from "../../utils/fetchData"
import BlogCard from "./BlogCard"

import InfiniteScroll from "../feature/InfiniteScroll"
import useAuthContext from "../../hooks/useAuthContext"
import EditBlog from "./EditBlog"
import useBlogContext from "../../hooks/useBlogContext"



const queryFunction = async ({ pageParam }) => {
    return fetchData('/blogs', { limit: 2, page: pageParam })
}

const BlogList = () => {
    const { fetchNextPage, isLoading, isFetching, data, hasNextPage } = useInfiniteQueryData(['blogs'], queryFunction)
    if (isLoading) {
        return <div className="text-gray-100 text-lg">Loading.....</div>
    }
    const flatBlogs = data?.pages?.flatMap(blog => blog.blogs)
    const {state} = useBlogContext()
  
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

        </div>
    )
}

export default BlogList