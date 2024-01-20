import Sidebar from "../organs/Sidebar.tsx";
import ScheduleTable from "../components/fleetTable.tsx";

const Dashboard = () => {
    return (
        <>
            <Sidebar />
            <ScheduleTable />
        </>
    )
}

export default Dashboard