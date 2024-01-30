import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
    id: string,
    name: string,
    image: string,
    estimate_price: number,
    estimate_day: number,
) {
    return { id, name, image, estimate_price, estimate_day
    };
}

const rows = [
    createData('1', 'jakarta', 'img', 450000, 1),
    createData('2','Bandung', 'img', 9.0, 2),
    createData('3','Surabaya', 'img', 16.0, 1),
    createData('4','Malang', 'img', 3.7, 0),
    createData('5','Banyuwangi', 'img', 16.0, 1),
];

export default function BasicTable() {
    return (
        <div className="p-20">
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align="right">Nama Destinasi</TableCell>
                            <TableCell align="right">Gambar</TableCell>
                            <TableCell align="right">Estimasi Harga</TableCell>
                            <TableCell align="right">Estimasi Trip</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell align="right">{row.name}</TableCell>
                                <TableCell align="right">{row.image}</TableCell>
                                <TableCell align="right">{row.estimate_price}</TableCell>
                                <TableCell align="right">{row.estimate_day}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
