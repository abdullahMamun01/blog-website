import { useParams } from "react-router-dom"
import BlogAuthor from "../components/blog/blogDetails/BlogAuthor"
import BlogBanner from "../components/blog/blogDetails/BlogBanner"
import BlogDescription from "../components/blog/blogDetails/BlogDescription"
import useQueryData from "../hooks/useQueryData"
import { fetchData } from "../utils/fetchData"
import Loading from "../components/loading/Loading"
import dateFormate from "../utils/dateFormate"
import BlogTagList from "../components/blog/blogDetails/BlogTagList"

import CommentList from "../components/blog/blogDetails/CommentsList"
import useAxios from "../hooks/useAxios"
import ProfileLink from "../components/common/ProfileLink"


const BlogDetailPage = () => {
    const { id } = useParams()
    const { axiosPrivate } = useAxios()

    const fetchSingleBLog = async () => {
        const response = await axiosPrivate.get(`/blogs/${id}`)
        return response.data
    }
    const { data, isLoading, isError, error } = useQueryData(['blog', { id }], fetchSingleBLog())

    if (isLoading) {
        return <Loading />
    }

    const { title, author, content, tags, thumbnail, comments, createdAt, likes } = data
  
    return (
        <>
            <h1 className="font-bold text-3xl md:text-5xl text-center">{title}</h1>
            <div className="flex justify-center items-center my-4 gap-4">
                <ProfileLink author={author}>
                    <BlogAuthor author={author} />
                </ProfileLink>
                <span className="text-sm text-slate-700 dot">{dateFormate(createdAt)}</span>
                <span className="text-sm text-slate-700 dot">{likes.length} Likes</span>
            </div>
            <BlogBanner thumbnail={thumbnail} />
            <BlogTagList tags={tags} />
            <BlogDescription description={content} />
            <CommentList comments={data?.comments} id={id} />
        </>
    )
}

export default BlogDetailPage