import React from 'react'
import { useDispatch } from 'react-redux'
import { changeSearchItem } from '../../app/gallerySlice'

function SearchBar() {
  const dispatch = useDispatch();

  return (
    <React.Fragment>
        <div className='max-w-md mx-auto'>
            <div className="bg-gray-500 relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg overflow-hidden">
                <div className="grid place-items-center border-solid border-0 border-r border-gray-600 h-full w-12 text-white opacity-90">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
                <input
                  className="peer h-full w-full outline-none border-none bg-gray-600 text-sm pr-2 placeholder:text-white placeholder:opacity-90 text-white indent-3"
                  type="text"
                  id="search"
                  placeholder="Search something.."
                  onChange={(e) => dispatch(changeSearchItem(e.target.value))} /> 
            </div>
        </div>
    </React.Fragment>
  )
}

export default SearchBar