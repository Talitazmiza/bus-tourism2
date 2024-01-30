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
    email: string,
    role_id: number,
) {
    return { id, name, email, role_id
    };
}

const rows = [
    createData('1', 'Burhan', 'burhanyahoot@mail.to', 1),
    createData('2','Namila', 'namakumila@mail.her', 2),
    createData('3','Hijack', 'jackiehi@mail.his', 2),
    createData('4','Zuzurly', 'zuzurskaly@mail.co', 3),
    createData('5','Utami', 'utamiii1717@mail.co', 3),
];

export default function UsersTable() {
    return (
        <div className="p-20">
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align="right">Nama</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Role ID</TableCell>
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
                                <TableCell align="right">{row.email}</TableCell>
                                <TableCell align="right">{row.role_id}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
