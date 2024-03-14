import { useInfiniteQuery } from '@tanstack/react-query'


const useInfiniteQueryData = (key, fetchFunction) => {
    return useInfiniteQuery({
        queryKey : key,
        queryFn : fetchFunction,
        initialPageParam : 1,
        getNextPageParam : (lastPage) => {
            return  lastPage.page + 1 
        }
    })
}

export default useInfiniteQueryData