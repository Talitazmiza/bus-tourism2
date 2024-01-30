import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faClock, faBus, faCity, faMoneyBill, faUser, faUsers, faUserLock} from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    return (
        <div className="bg-gray-100">
            <aside id="logo-sidebar"
                   className="top-0 left-0 z-40 h-screen transition-transform -translate-x-full sm:translate-x-0"
                   aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto">
                    <div className="h-full p-10 rounded-2xl bg-white drop-shadow-md">
                        <ul className="grid gap-2 space-y-2 font-medium">
                            <li>
                                <a href="/dashboard-fleet"
                                   className="flex items-center p-2 text-gray-900 rounded-lg dark:text-black hover:bg-gray-100 dark:hover:bg-orange-400  group">
                                    <FontAwesomeIcon icon={faBus} />
                                    <span className="flex-1 ml-3 whitespace-nowrap">Armada</span>
                                </a>
                            </li>
                            <li>
                                <a href="/dashboard-schedule"
                                   className="flex items-center p-2 rounded-lg  hover:bg-gray-100 dark:hover:bg-orange-400  group">
                                    <FontAwesomeIcon icon={faClock} />
                                    <span className="flex-1 ml-3 whitespace-nowrap">Jadwal</span>
                                </a>
                            </li>
                            <li>
                                <a href="/dashboard-destination"
                                   className="flex items-center p-2 text-gray-900 rounded-lg dark:text-black hover:bg-gray-100 dark:hover:bg-orange-400  group">
                                    <FontAwesomeIcon icon={faCity} />
                                    <span className="flex-1 ml-3 whitespace-nowrap">Destinasi</span>
                                </a>
                            </li>
                            <li>
                                <a href="/dashboard-transaction"
                                   className="flex items-center p-2 text-gray-900 rounded-lg dark:text-black hover:bg-gray-100 dark:hover:bg-orange-400  group">
                                    <FontAwesomeIcon icon={faMoneyBill} />
                                    <span className="flex-1 ml-3 whitespace-nowrap">Transaksi</span>
                                </a>
                            </li>
                            <h1 className="text-gray-400">MANAJEMEN USER</h1>
                            <li>
                                <a href="/dashboard-user"
                                   className="flex items-center p-2 text-gray-900 rounded-lg dark:text-black hover:bg-gray-100 dark:hover:bg-orange-400  group">
                                    <FontAwesomeIcon icon={faUser} />
                                    <span className="flex-1 ml-3 whitespace-nowrap">User</span>
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                   className="flex items-center p-2 text-gray-900 rounded-lg dark:text-black hover:bg-gray-100 dark:hover:bg-orange-400  group">
                                    <FontAwesomeIcon icon={faUsers} />
                                    <span className="flex-1 ml-3 whitespace-nowrap">Role</span>
                                </a>
                            </li>
                            <li>
                                <a href="/setting-permission"
                                   className="flex items-center p-2 text-gray-900 rounded-lg dark:text-black hover:bg-gray-100 dark:hover:bg-orange-400  group">
                                    <FontAwesomeIcon icon={faUserLock} />
                                    <span className="flex-1 ml-3 whitespace-nowrap">Role Permission</span>
                                </a>
                            </li>
                            <h1 className="text-gray-400">AUTH</h1>
                            <li>
                                <a href="#"
                                   className="flex items-center p-2 text-gray-900 rounded-lg dark:text-black hover:bg-gray-100 dark:hover:bg-orange-400  group">
                                    <span className="flex-1 ml-3 whitespace-nowrap">Sign In</span>
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                   className="flex items-center p-2 text-gray-900 rounded-lg dark:text-black hover:bg-gray-100 dark:hover:bg-orange-400  group">
                                    <span className="flex-1 ml-3 whitespace-nowrap">Sign Up</span>
                                </a>
                            </li>
                            <li>
                                <a href="/"
                                   className="flex items-center p-2 text-gray-900 rounded-lg dark:text-black hover:bg-gray-100 dark:hover:bg-red-400 group">
                                    {/*<FontAwesomeIcon icon={faDoorOpen} />*/}
                                    <span className="flex-1 ml-3 whitespace-nowrap">Logout</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </aside>
        </div>
    );
};

export default Sidebar;