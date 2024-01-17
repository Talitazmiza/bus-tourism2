import Sidebar from "./organs/Sidebar.tsx";
import Table from "./components/Tables.tsx";

const Dashboard = () => {
    return (
        <>
            <div className="flex flex-col gap-40">
                <Sidebar />
                <Table />
            </div>
        </>
    )
}

export default Dashboard