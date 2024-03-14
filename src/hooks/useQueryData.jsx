import { useQuery } from '@tanstack/react-query'

const useQueryData = (key, fetchFunction) => {


   return useQuery({
        queryKey: key,
        queryFn: async () => fetchFunction,
        refetchOnWindowFocus : true
        
    })
   
}

export default useQueryData