import Sidebar from "../organs/Sidebar.tsx";
// @ts-ignore
import AdminNavBar from '../organs/AdminNavBar.tsx';
import FleetTable from "../components/fleetTable.tsx";

const Dashboard = () => {
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
                <FleetTable />
            </div>
        </div>
    </div>
    )
}

export default Dashboard