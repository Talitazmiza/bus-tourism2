const AdminNavBar = () => {

    return (
        <div>
            {/* This example requires Tailwind CSS v2.0+ */}
            <div className="relative drop-shadow-md">
                <div className="px-4 sm:px-6">
                    <div className="flex justify-start items-center py-6 md:justify-start md:space-x-10">
                        <div className="ml-10">
                            <a href="/">
                                <span className="text-orange-400">Bus Tourism</span>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminNavBar;