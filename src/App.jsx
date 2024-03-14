
import { Route, Routes } from 'react-router-dom'
import DefaultLayout from './components/layout/DefaultLayout'
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import BlogDetailPage from './pages/BlogDetailPage'
import ProfilePage from './pages/ProfilePage'
import PrivateRoute from './routes/PrivateRoute'
import ErrorPage from './components/error/ErrorPage'
import CreateBlogPage from './pages/CreateBlogPage'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import Register from './pages/Register'

const App = () => {
  return (
    <>
      <ToastContainer />
      <Routes >
        <Route element={<DefaultLayout />} >
          <Route path="/" element={<HomePage />} />

          <Route element={<PrivateRoute />} >
            <Route path="/me" element={<ProfilePage />}></Route>
            <Route path='/createBlog' element={<CreateBlogPage />} />
          </Route>
          <Route path='/profile/:id' element={<ProfilePage />} />
          <Route path="/blog/:id" element={<BlogDetailPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>


      </Routes>
    </>
  )
}

export default App