import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenSquare} from '@fortawesome/free-solid-svg-icons'
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import React from 'react';

const AddDestPopUp = () => {
    return (
        <div>
            {/*@ts-ignore*/}
            <button className="btn block text-white bg-orange-400 hover:bg-orange-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={()=>document.getElementById('my_modal_12').showModal()}>
                <FontAwesomeIcon icon={faPenSquare} /></button>
            <dialog id="my_modal_12" className="modal rounded-lg w-1/2 h-fit">
                <div className="">
                    <div className="modal-box">
                        {/*<p className="py-4">Press ESC key or click the button below to close</p>*/}
                        <div className="modal-action p-10">
                            <form method="dialog">
                                <React.Fragment>
                                    <Typography variant="h6" gutterBottom>
                                        Update Armada
                                    </Typography>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                // required
                                                id="name"
                                                name="name"
                                                label="Nama Armada"
                                                fullWidth
                                                autoComplete="given-name"
                                                variant="standard"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                // required
                                                id="nopol"
                                                name="nopol"
                                                label="Nomor Polisi"
                                                fullWidth
                                                autoComplete="given-name"
                                                variant="standard"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                id="capacity"
                                                label="Kapasitas (Orang)"
                                                fullWidth
                                                type="number"
                                                variant="standard"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <h3 className="mb-2">Status</h3>
                                            <div>
                                                <select
                                                    className="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                    id="grid-state">
                                                    <option>Tersedia</option>
                                                    <option>Belum Tersedia</option>
                                                </select>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </React.Fragment>
                                <div className="flex justify-between mt-10">
                                    <button className="btn bg-red-500 rounded-lg p-3">Batal</button>
                                    <button className="btn bg-blue-500 rounded-lg p-3">Update</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default AddDestPopUp;