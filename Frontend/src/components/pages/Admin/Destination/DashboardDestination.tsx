import Sidebar from "../organs/Sidebar.tsx";
// @ts-ignore
import AdminNavBar from "../organs/AdminNavBar.tsx";
import DestinationTable from "../components/DestinationTable.tsx";

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
                    <DestinationTable />
                </div>
            </div>
        </div>
    )
}

export default DashboardDestination