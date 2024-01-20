import AddFleet from "../Fleet/addFleet.tsx";
import EditFleet from "../Fleet/editFleet.tsx";
import DeleteFleet from "../Fleet/deleteFleet.tsx";

const fleetTable = () => {
    return (
        <div className="w-full h-screen bg-gray-100">
            <div className="p-20">
                <div
                    className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1 ml-40">
                    <div className="flex justify-between">
                        <h4 className="mb-6 text-xl font-bold text-black">
                            Daftar Armada
                        </h4>
                        <h1><AddFleet /></h1>
                    </div>
                    <div className="flex flex-col">
                        <div className="grid grid-cols-5 rounded-sm bg-gray-300 dark:bg-meta-4 sm:grid-cols-6">
                            <div className="hidden p-2.5 text-center sm:block xl:p-5">
                                <h5 className="text-sm font-medium uppercase xsm:text-base">Gambar</h5>
                            </div>
                            <div className="p-2.5 xl:p-5">
                                <h5 className="text-sm font-medium uppercase xsm:text-base">Nama</h5>
                            </div>
                            <div className="p-2.5 text-center xl:p-5">
                                <h5 className="text-sm font-medium uppercase xsm:text-base">No. Pol</h5>
                            </div>
                            <div className="p-2.5 text-center xl:p-5">
                                <h5 className="text-sm font-medium uppercase xsm:text-base">Kapasitas(orang)</h5>
                            </div>
                            <div className="hidden p-2.5 text-center sm:block xl:p-5">
                                <h5 className="text-sm font-medium uppercase xsm:text-base">Status</h5>
                            </div>
                            <div className="hidden p-2.5 text-center sm:block xl:p-5">
                                <h5 className="text-sm font-medium uppercase xsm:text-base">Aksi</h5>
                            </div>
                        </div>

                        <div className="grid grid-cols-5 rounded-sm bg-white dark:bg-meta-4 sm:grid-cols-6">
                            <div className="flex items-center gap-3 p-2.5 xl:p-5">
                                <img src="https://assets.volvo.com/is/image/VolvoInformationTechnologyAB/BS%20VI%20Bus%20Single%20Axcel_Single%20Bus?wid=1400&fit=constrain" className="w-30 h-20" alt={}/>
                            </div>
                            <div className="flex items-center gap-3 p-2.5 xl:p-5">
                                <p className="hidden font-medium text-black sm:block">
                                    Super Top
                                </p>
                            </div>
                            <div className="flex items-center justify-center p-2.5 xl:p-5">
                                <p className="font-medium text-black">XOXOXOXO</p>
                            </div>
                            <div className="flex items-center justify-center p-2.5 xl:p-5">
                                <p className="font-medium text-meta-3">20</p>
                            </div>
                            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                                <p className="font-medium text-green-400"> Active
                                </p>
                            </div>
                            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5 gap-10">
                                <EditFleet />
                                <DeleteFleet />
                            </div>
                        </div>

                        <div className="grid grid-cols-5 rounded-sm bg-white dark:bg-meta-4 sm:grid-cols-6">
                            <div className="flex items-center gap-3 p-2.5 xl:p-5">
                                <img src="https://media.istockphoto.com/id/135327019/photo/white-passenger-bus.jpg?s=612x612&w=0&k=20&c=sRU5BpOsY6fyYj9pMiAxz0dLML--uoNl7rIXelRbFnc=" alt={} className="w-30 h-20"/>
                            </div>
                            <div className="flex items-center gap-3 p-2.5 xl:p-5">
                                <p className="hidden font-medium text-black sm:block">
                                    High Decker Double Glass (HDD)
                                </p>
                            </div>
                            <div className="flex items-center justify-center p-2.5 xl:p-5">
                                <p className="font-medium text-black">XOXOXOXO</p>
                            </div>
                            <div className="flex items-center justify-center p-2.5 xl:p-5">
                                <p className="font-medium text-meta-3">20</p>
                            </div>
                            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                                <p className="font-medium text-red-400"> Tidak Tersedia
                                </p>
                            </div>
                            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5 gap-10">
                                <EditFleet />
                                <DeleteFleet />
                            </div>
                        </div>

                        <div className="grid grid-cols-5 rounded-sm bg-white dark:bg-meta-4 sm:grid-cols-6">
                            <div className="flex items-center gap-3 p-2.5 xl:p-5">
                                <img src="https://en.higer.com/uploadfiles/2021/01/20210114153659283.png?Njg5Ni5wbmc=" alt={} className="w-30 h-20"/>
                            </div>
                            <div className="flex items-center gap-3 p-2.5 xl:p-5">
                                <p className="hidden font-medium text-black sm:block">
                                    Super Top
                                </p>
                            </div>
                            <div className="flex items-center justify-center p-2.5 xl:p-5">
                                <p className="font-medium text-black">XOXOXOXO</p>
                            </div>
                            <div className="flex items-center justify-center p-2.5 xl:p-5">
                                <p className="font-medium text-meta-3">20</p>
                            </div>
                            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                                <p className="font-medium text-green-400"> Active
                                </p>
                            </div>
                            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5 gap-10">
                                <EditFleet />
                                <DeleteFleet />
                            </div>
                        </div>

                        <div className="grid grid-cols-5 rounded-sm bg-white dark:bg-meta-4 sm:grid-cols-6">
                            <div className="flex items-center gap-3 p-2.5 xl:p-5">
                                <img src="https://en.higer.com/uploadfiles/2021/01/20210114084446496.png?NjEyMkIucG5n" alt={} className="w-30 h-20"/>
                            </div>
                            <div className="flex items-center gap-3 p-2.5 xl:p-5">
                                <p className="hidden font-medium text-black sm:block">
                                    Normal Decker
                                </p>
                            </div>
                            <div className="flex items-center justify-center p-2.5 xl:p-5">
                                <p className="font-medium text-black">XOXOXOXO</p>
                            </div>
                            <div className="flex items-center justify-center p-2.5 xl:p-5">
                                <p className="font-medium text-meta-3">20</p>
                            </div>
                            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                                <p className="font-medium text-green-400"> Active
                                </p>
                            </div>
                            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5 gap-10">
                                <EditFleet />
                                <DeleteFleet />
                            </div>
                        </div>

                        <div className="grid grid-cols-5 rounded-sm bg-white dark:bg-meta-4 sm:grid-cols-6">
                            <div className="flex items-center gap-3 p-2.5 xl:p-5">
                                <img src="https://img.freepik.com/free-vector/cartoon-school-bus-white-background_1308-132853.jpg" alt={} className="w-30 h-20"/>
                            </div>
                            <div className="flex items-center gap-3 p-2.5 xl:p-5">
                                <p className="hidden font-medium text-black sm:block">
                                    Super Top
                                </p>
                            </div>
                            <div className="flex items-center justify-center p-2.5 xl:p-5">
                                <p className="font-medium text-black">XOXOXOXO</p>
                            </div>
                            <div className="flex items-center justify-center p-2.5 xl:p-5">
                                <p className="font-medium text-meta-3">20</p>
                            </div>
                            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                                <p className="font-medium text-green-400"> Active
                                </p>
                            </div>
                            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5 gap-10">
                                <EditFleet />
                                <DeleteFleet />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default fleetTable;