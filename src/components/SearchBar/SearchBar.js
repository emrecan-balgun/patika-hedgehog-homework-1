import React from 'react'

function SearchBar() {
  return (
    <React.Fragment className="p-3">
        <div class='max-w-md mx-auto'>
            <div class="bg-gray-400 relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
                <div class="grid place-items-center h-full w-12 text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
                <input
                class="peer h-full w-full outline-none bg-gray-500 text-sm pr-2 placeholder:pl-[10px] placeholder:text-white placeholder:opacity-70"
                type="text"
                id="search"
                placeholder="Search something.." /> 
            </div>
        </div>
    </React.Fragment>
  )
}

export default SearchBar