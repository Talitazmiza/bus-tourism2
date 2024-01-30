import Sidebar from "../organs/Sidebar.tsx";
import ScheduleTable from "../components/ScheduleTable.tsx";
import AdminNavBar from "../organs/NavBar.tsx";

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
                    <ScheduleTable />
                </div>
            </div>
        </div>
    )
}

export default Dashboard