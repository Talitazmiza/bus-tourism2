import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'


const editFleet = () => {
    // @ts-ignore
    return (
        <div>
            {/*@ts-ignore*/}
            <button className="btn hover:bg-blue-400 rounded-full" onClick={()=>document.getElementById('my_modal_2').showModal()}>
                <FontAwesomeIcon icon={faPenToSquare} /></button>
            <dialog id="my_modal_2" className="modal rounded-lg">
                <div>
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Edit Armada</h3>
                        {/*<p className="py-4">Press ESC key or click the button below to close</p>*/}
                        <div className="modal-action p-10">
                            <form method="dialog">
                                <div className="text-left">
                                    <div className="flex flex-wrap -mx-3 mb-6">
                                        <div className="w-full px-3">
                                            <label
                                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                htmlFor="grid-password">
                                                Nama Armada
                                            </label>
                                            <input
                                                className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                id="name" type="text" placeholder="nama armada" />
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap -mx-3 mb-6">
                                        <div className="w-full px-3">
                                            <label
                                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                htmlFor="grid-password">
                                                Nomor Polisi
                                            </label>
                                            <input
                                                className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                id="nopol" type="text" placeholder="nomor polisi" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-wrap -mx-3 mb-6">
                                    <div className="w-full px-3">
                                        <label
                                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                            htmlFor="grid-password">
                                            Kapasitas
                                        </label>
                                        <input
                                            className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            id="capacity" type="text" placeholder="kapasitas" />
                                    </div>
                                </div>
                                <div className="flex flex-wrap -mx-3 mb-6">
                                    <label
                                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="grid-state">
                                        Status Armada
                                    </label>
                                    <div className="relative mt-7">
                                        <select
                                            className="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            id="grid-state">
                                            <option>Tersedia</option>
                                            <option>Belum Tersedia</option>
                                        </select>
                                        <div
                                            className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                                                 viewBox="0 0 20 20">
                                                <path
                                                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center bg-grey-lighter">
                                    <label
                                        className="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white">
                                        <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                                             viewBox="0 0 20 20">
                                            <path
                                                d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"/>
                                        </svg>
                                        <span className="mt-2 text-base leading-normal">Pilih Gambar</span>
                                        <input type='file' className="hidden"/>
                                    </label>
                                </div>
                                <div className="flex justify-between mt-5">
                                    <button className="btn bg-red-500 font-bold rounded-full p-5">Batal</button>
                                    <button className="btn bg-blue-500 font-bold rounded-full p-5">Edit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default editFleet;