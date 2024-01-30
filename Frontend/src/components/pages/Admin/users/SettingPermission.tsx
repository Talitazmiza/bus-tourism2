import AdminNavBar from "../organs/NavBar.tsx";
import Sidebar from "../organs/Sidebar.tsx";
import RolePermission from "./RolePermission.tsx";

const SettingPermission = () => {
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
                    <RolePermission />
                </div>
            </div>
        </div>
    )
}

export default SettingPermission;