import React, { useState } from 'react'
import usePortalContext from '../../hooks/usePortalContext'
import CloseIcon from '../../assets/icons/close.svg'
import SearchList from '../SearchList'
import { api } from '../../api/api'
import useDebounce from '../../hooks/useDebounce'
import useQueryData from '../../hooks/useQueryData'
import useAxios from '../../hooks/useAxios'

const SearchModal = () => {

    const [search,setSearch] = useState('')

    const fetchSearch = async (searchTerm) => {
 
        const response = await api.get(`/search?q=${searchTerm}`)
        return response.data
    }

    const { setIsPortalOpen } = usePortalContext()
    const [debounceValue,debounceCB] = useDebounce(search ,500)
  
    const { data,isError,error } = useQueryData(['search'], debounceValue ? fetchSearch(debounceValue) : {data: []})


    const handleSearch = (e) => {
        const value = e.target.value
        debounceCB(value)

    }


    return (
        <section class="absolute left-0 top-0 w-full h-full grid place-items-center bg-slate-800/50 backdrop-blur-sm z-50">
            <div
                className="relative w-6/12 mx-auto bg-slate-900 p-4 border border-slate-600/50 rounded-lg shadow-lg shadow-slate-400/10"
            >
                <div>
                    <h3 className="font-bold text-xl pl-2 text-slate-400 my-2">Search for Your Desire Blogs</h3>
                    <input
                        onChange={handleSearch}
                        type="text"
                        placeholder="Start Typing to Search"
                        className="w-full bg-transparent p-2 text-base text-white outline-none border-none rounded-lg focus:ring focus:ring-indigo-600"
                    />
                </div>

                <div className='text-red-600'>{error?.message}</div>
                {/* search result */}
                <div className="">
                    <h3 className="text-slate-400 font-bold mt-6">Search Results</h3>
                    {data?.data.map(blog => (<SearchList key={blog.id} {...blog}/>))}
                </div>

                <button onClick={() => setIsPortalOpen(false)}>
                    <img src={CloseIcon} alt="Close" className="absolute right-2 top-2 cursor-pointer w-8 h-8" />
                </button>
            </div>
        </section>
    )
}

export default SearchModal