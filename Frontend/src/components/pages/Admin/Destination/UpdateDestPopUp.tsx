import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

const UpdateDestPopUp = () => {
    return (
        <div>
            {/*@ts-ignore*/}
            <button className="btn block text-white bg-orange-400 hover:bg-orange-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={()=>document.getElementById('my_modal_5').showModal()}>
                <FontAwesomeIcon icon={faPenToSquare} /></button>
            <dialog id="my_modal_5" className="modal rounded-lg bg-white w-1/3">
                <div className="">
                    <div className="modal-box">
                        {/*<p className="py-4">Press ESC key or click the button below to close</p>*/}
                        <div className="modal-action p-10">
                            <form method="dialog">
                                <React.Fragment>
                                    <Typography className="text-left" variant="h6" gutterBottom>
                                        Update Destinasi
                                    </Typography>
                                    <div className="grid gap-5 mt-10">
                                        <Grid item>
                                            <TextField
                                                // required
                                                id="cardName"
                                                fullWidth
                                                label="Nama Destinasi"
                                                autoComplete="cc-name"
                                                variant="standard"
                                            />
                                        </Grid>
                                        <div>
                                            <Grid item>
                                                <TextField
                                                    id="standard-number"
                                                    label="Estimasi Harga (Rp)"
                                                    fullWidth
                                                    type="number"
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                    variant="standard"
                                                />
                                            </Grid>
                                        </div>
                                        <div>
                                            <Grid item>
                                                <TextField
                                                    id="standard-number"
                                                    label="Estimasi Trip (hari)"
                                                    fullWidth
                                                    type="number"
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                    variant="standard"
                                                />
                                            </Grid>
                                        </div>
                                        <div className="mt-3 mb-10 flex items-start">
                                            <Grid item>
                                                <h3 className="text-left">Pilih Gambar</h3>
                                                <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg"/>
                                            </Grid>
                                        </div>
                                    </div>
                                </React.Fragment>
                                <div className="flex justify-between mt-5">
                                    <button className="btn bg-red-500 rounded-xl p-3">Batal</button>
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

export default UpdateDestPopUp;