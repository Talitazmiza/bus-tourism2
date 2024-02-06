import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus} from '@fortawesome/free-solid-svg-icons'
import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

const AddDestPopUp = () => {
    return (
        <div>
            {/*@ts-ignore*/}
            <button className="btn hover:bg-orange-300 rounded-lg p-2" onClick={()=>document.getElementById('my_modal_4').showModal()}>
                <FontAwesomeIcon icon={faPlus} />Tambah Destinasi</button>
            <dialog id="my_modal_4" className="modal rounded-lg bg-white w-1/3">
                <div className="">
                    <div className="modal-box">
                        {/*<p className="py-4">Press ESC key or click the button below to close</p>*/}
                        <div className="modal-action p-10">
                            <form method="dialog">
                                <React.Fragment>
                                    <Typography variant="h6" gutterBottom>
                                        Tambah Destinasi
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
                                        <div className="mt-3 mb-10">
                                            <Grid item>
                                                <label htmlFor="avatar" className="text-sm">Pilih Gambar</label><br />
                                                <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg"/>
                                            </Grid>
                                        </div>
                                    </div>
                                </React.Fragment>
                                <div className="flex justify-between mt-5">
                                    <button className="btn bg-red-500 rounded-xl p-3">Batal</button>
                                    <button className="btn bg-blue-500 rounded-lg p-3">Tambah</button>
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