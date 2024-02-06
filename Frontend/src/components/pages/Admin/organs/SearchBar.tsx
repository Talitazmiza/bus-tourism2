const SearchBar = () => {
    return (
        <div className="max-w-sm">
            <input
                className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                type="search" placeholder="Search" />
            {/*<button*/}
            {/*    className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-700 bg-gray-100 border border-gray-300 rounded-r-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">*/}
            {/*</button>*/}
        </div>
    )
}

export default SearchBar;