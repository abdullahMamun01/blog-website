import React from 'react';
import ProfileImage from '../components/Profile/ProfileImage';
import ProfileInfo from '../components/Profile/ProfileInfo';
import Bio from '../components/Profile/Bio';
import useAxios from '../hooks/useAxios';
import useQueryData from '../hooks/useQueryData';
import useAuthContext from '../hooks/useAuthContext';
import Loading from '../components/loading/Loading';

import { useParams } from 'react-router-dom';
import BlogCard from '../components/blog/BlogCard';
import UpdateProfileModal from '../components/modal/UpdateProfileModal';
import useBlogContext from '../hooks/useBlogContext';

const ProfilePage = () => {
  const { axiosPrivate } = useAxios();
  const { auth } = useAuthContext();

  const { id: profileUserId } = useParams(); // Get the user ID from the URL params

  // Fetch user profile
  const getProfile = async (userId) => {
    const response = await axiosPrivate.get(`/profile/${userId}`);
    return response.data;
  };

  const { data, isError, error, isLoading } = useQueryData(
    ['user', { id: profileUserId || auth?.user?.id }],
    getProfile(profileUserId || auth?.user?.id)
  );

  if (isLoading) {
    return <Loading />;
  }

  const latestPost = (data.blogs);

  const isMe = auth?.user?.id === data?.id

  const {state} = useBlogContext()
  const {updateProfileModal} = state

  return (
    <main className="mx-auto max-w-[1020px] py-8">

      {updateProfileModal.isOpen && <UpdateProfileModal/>}

      <div className="">
        <div className="flex flex-col items-center py-8 text-center ">
          <ProfileImage  firstName={data.firstName} avatar={data.avatar} isMe={isMe}/>

          <ProfileInfo
            firstName={data?.firstName}
            lastName={data?.lastName}
            email={data?.email}
            avatar={data?.avatar}
          />
          <Bio bio={data?.bio} isMe={isMe} />
          <h4 className="mt-6 text-xl lg:mt-8 lg:text-2xl my-4">Your Blogs</h4>

          {latestPost.length === 0 ? <span>Blog is empty</span>
            :
            latestPost?.map(blog => <BlogCard key={blog.id} blog={blog} />)
          }

        </div>
      </div>
    </main>
  );
};

export default ProfilePage;
