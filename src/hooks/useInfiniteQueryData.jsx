import { useInfiniteQuery } from '@tanstack/react-query'


const useInfiniteQueryData = (key, fetchFunction) => {
    return useInfiniteQuery({
        queryKey : key,
        queryFn : fetchFunction,
        initialPageParam : 1,
        getNextPageParam : (lastPage,allPage) => {
           if(lastPage.blogs.length === 0){

            return null
           }
            return   lastPage.page + 1 
        }
    })
}

export default useInfiniteQueryData