import Sidebar from "../organs/Sidebar.tsx";
import AdminNavBar from "../organs/AdminNavBar.tsx";
import UsersTable from "../components/UsersTable.tsx";

const DashboardDestination = () => {
    return (
        <div className="w-full h-screen">
            <div>
                <AdminNavBar />
            </div>
            <div className="flex flex-row bg-gray-100">
                <div className="basis-1/5">
                    <Sidebar />
                </div>
                <div className="basis-4/5">
                    <UsersTable />
                </div>
            </div>
        </div>
    )
}

export default DashboardDestination