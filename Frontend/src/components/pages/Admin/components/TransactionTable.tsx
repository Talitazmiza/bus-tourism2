import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
    id: string,
    depart: string,
    destination: string,
    start_date: string,
    end_date: string,
    price: number,
) {
    return { id, depart, destination, start_date, end_date, price };
}

const rows = [
    createData('1','Surabaya', 'Jakarta', '2024-01-31', '2024-01-31', 500000),
    createData('2','Surabaya', 'Jakarta', '2024-02-15', '2024-02-16', 500000),
    createData('3','Surabaya', 'Jakarta', '2024-02-15', '2024-02-15', 500000),
    createData('4','Surabaya', 'Jakarta', '2024-03-04', '2024-03-04', 500000),
    createData('5','Surabaya', 'Jakarta', '2024-03-04', '2024-03-04', 500000),
];

export default function BasicTable() {
    return (
        <div className="p-20">
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align="right">Asal</TableCell>
                            <TableCell align="right">Tujuan</TableCell>
                            <TableCell align="right">Berangkat</TableCell>
                            <TableCell align="right">Tiba</TableCell>
                            <TableCell align="right">Total Harga</TableCell>
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
                                <TableCell align="right">{row.depart}</TableCell>
                                <TableCell align="right">{row.destination}</TableCell>
                                <TableCell align="right">{row.start_date}</TableCell>
                                <TableCell align="right">{row.end_date}</TableCell>
                                <TableCell align="right">{row.price}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
