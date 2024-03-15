import { Link, useLocation } from "react-router-dom";
import dateFormate from "../../utils/dateFormate";
import ActionMenuModal from "../modal/ActionMenuModal";
import useAuthContext from "../../hooks/useAuthContext";
import EditBlog from "./EditBlog";
import useModal from "../../hooks/useModal";
import Portal from "../Portal";
import ConfirmDeleteModal from "../modal/ConfirmDeleteModal";
import ProfileLink from "../common/ProfileLink";
import useBlogContext from "../../hooks/useBlogContext";

// 
const BlogCard = ({ blog }) => {
  const { id, title, content, author, thumbnail, createdAt, likes } = blog
  const { firstName, lastName } = author
  const fullName = firstName + ' ' + lastName

  const { auth } = useAuthContext()
  const isShowing = author?.id === auth?.user?.id
  const {state} = useBlogContext()
  
  return (
    <div className="blog-card relative overflow-hidden">
      {state.editModal.isOpen && <EditBlog/>}
      {isShowing && <ActionMenuModal id={id} blog={blog} />}

      <img
        className="blog-thumb"
        src={`${import.meta.env.VITE_SERVER_BASE_URL}/uploads/blog/${thumbnail}`}
        alt=""
      />

      <div className="mt-2">
        <h3 className="text-slate-300 text-xl lg:text-2xl text-left">
          <Link to={`/blog/${id}`}>{title}</Link>
        </h3>
        <p className="mb-6 text-base text-slate-500 mt-1 text-left">{content.slice(0, 200)}</p>

        <div className="flex justify-between items-center">
          <div className="flex items-center capitalize space-x-2">
            <div className="avater-img bg-indigo-600 text-white">

              <ProfileLink author={author}>
                {author?.avatar ?
                  <img className="rounded-full" src={`${import.meta.env.VITE_SERVER_BASE_URL}/uploads/avatar/${author?.avatar}`} alt="" />
                  :
                  <span className="">{firstName[0]}</span>
                }
              </ProfileLink>
            </div>

            <div>
              <h5 className="text-slate-500 text-sm">
                <ProfileLink author={author}>
                  {fullName}
                </ProfileLink>
              </h5>
              <div className="flex items-center text-xs text-slate-700">
                <span>{dateFormate(createdAt)}</span>
              </div>
            </div>
          </div>

          <div className="text-sm px-2 py-1 text-slate-700">
            <span>{likes.length}</span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default BlogCard;
