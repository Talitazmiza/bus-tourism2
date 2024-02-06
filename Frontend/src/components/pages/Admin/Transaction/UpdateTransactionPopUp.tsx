import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPenToSquare} from '@fortawesome/free-solid-svg-icons'
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import React, { useState } from 'react';
import Datepicker from "react-tailwindcss-datepicker";


const UpdateTransactionPopUp = () => {

    const [value, setValue] = useState({
        startDate: new Date(),
        endDate: new Date().setMonth(11)
    });

    // @ts-ignore
    const handleValueChange = (newValue) => {console.log("newValue:", newValue);
        setValue(newValue);
    }

    // @ts-ignore
    // @ts-ignore
    return (
        <div>
            {/*@ts-ignore*/}
            <button className="btn block text-white bg-orange-400 hover:bg-orange-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={()=>document.getElementById('my_modal_13').showModal()}>
                <FontAwesomeIcon icon={faPenToSquare} /></button>
            <dialog id="my_modal_13" className="modal rounded-lg w-1/2 h-fit">
                <div className="">
                    <div className="modal-box">
                        {/*<p className="py-4">Press ESC key or click the button below to close</p>*/}
                        <div className="modal-action p-10">
                            <form method="dialog">
                                <React.Fragment>
                                    <Typography variant="h6" gutterBottom className="text-left">
                                        Update Transaksi
lue                                    </Typography>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                // required
                                                id="origin"
                                                name="Berangkat"
                                                label="Berangkat"
                                                fullWidth
                                                autoComplete="given-name"
                                                variant="standard"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                // required
                                                id="destination"
                                                name="Tujuan"
                                                label="Tujuan"
                                                fullWidth
                                                autoComplete="given-name"
                                                variant="standard"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <h3 className="text-sm text-left">Pilih Tanggal</h3>
                                            <Datepicker
                                                // @ts-ignore
                                                value={value}
                                                onChange={handleValueChange}
                                                primaryColor={"amber"}
                                                showShortcuts={true}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                id="price"
                                                label="Total Harga"
                                                fullWidth
                                                type="number"
                                                variant="standard"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                // required
                                                id="details"
                                                name="details"
                                                label="Catatan (Ex. ekstra bantal)"
                                                fullWidth
                                                autoComplete="extra bantal"
                                                variant="standard"
                                            />
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

export default UpdateTransactionPopUp;