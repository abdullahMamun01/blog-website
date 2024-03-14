import React, { useEffect } from 'react'
import { axiosPrivate } from '../api/api'
import useAuthContext from './useAuthContext'


const useAxios = () => {
  const { auth, setAuth } = useAuthContext();

  useEffect(() => {
    // Add a request interceptor
    const requestIntercept = axiosPrivate.interceptors.request.use(
      (config) => {
        const accessToken = auth?.accessToken;
        if (accessToken) {
          config.headers.Authorization = `Bearer ${accessToken}`;
        }

        return config;
      },
      (error) => Promise.reject(error)
    );

    // Add a response interceptor
    const responseIntercept = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;
   
        if (error.response.status === 403 && !originalRequest._retry) {
          originalRequest._retry = true;
    
          try {
            const refreshToken = auth?.refreshToken;
            const response = await axiosPrivate.post('/auth/refresh-token', { refreshToken });
            const { accessToken } = response.data;
            
            setAuth({...auth , accessToken })
            // Retry the original request with the new token
            originalRequest.headers.Authorization = `Bearer ${token}`;
            return axiosPrivate(originalRequest);
          } catch (error) {
            // Handle refresh token error or redirect to login
            throw error
          }
        }
    
        return Promise.reject(error);
      }
    );
    return () => {
      axiosPrivate.interceptors.response.eject(responseIntercept);
      axiosPrivate.interceptors.request.eject(requestIntercept);
    }
  }, [ auth.accessToken]);

  return {axiosPrivate};
};



  

export default useAxios








// Rest of your imports





  

// export default useAxios