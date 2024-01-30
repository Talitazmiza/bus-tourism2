import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Box from '@mui/material/Box';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { TreeView } from '@mui/x-tree-view/TreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const names = [
    'Super Admin',
    'Admin',
    'Sekretaris',
    'Marketing',
    'IT Support',
];

function getStyles(name: string, personName: string[], theme: Theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

const RolePermission = () => {
    const theme = useTheme();
    const [personName, setPersonName] = React.useState<string[]>([]);

    const handleChange = (event: SelectChangeEvent<typeof personName>) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <div className="p-20">
            <div className="flex flex-row">
                <div className="w-2/5 border-2 bg-white rounded-lg">
                    <div className="p-20">
                        <FormControl sx={{ m: 1, width: 300 }}>
                            <InputLabel id="demo-multiple-name-label">Role</InputLabel>
                            <Select
                                labelId="demo-multiple-name-label"
                                id="demo-multiple-name"
                                multiple
                                value={personName}
                                onChange={handleChange}
                                input={<OutlinedInput label="Name" />}
                                MenuProps={MenuProps}
                            >
                                {names.map((name) => (
                                    <MenuItem
                                        key={name}
                                        value={name}
                                        style={getStyles(name, personName, theme)}
                                    >
                                        {name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                </div>
                <div className="w-3/5 border-2 bg-white rounded-lg">
                    <div className="p-20">
                        <Box sx={{ minHeight: 180, flexGrow: 1, maxWidth: 300 }}>
                            <TreeView
                                aria-label="file system navigator"
                                defaultCollapseIcon={<ExpandMoreIcon />}
                                defaultExpandIcon={<ChevronRightIcon />}
                            >
                                <TreeItem nodeId="1" label="Actions">
                                    <TreeItem nodeId="2" label="Create" />
                                    <TreeItem nodeId="3" label="Update" />
                                    <TreeItem nodeId="4" label="Delete" />
                                </TreeItem>
                                <TreeItem nodeId="5" label="User Management">
                                    <TreeItem nodeId="6" label="Create User" />
                                    <TreeItem nodeId="7" label="Create Role" />
                                    <TreeItem nodeId="8" label="Setting Permisson" />
                                </TreeItem>
                            </TreeView>
                        </Box>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RolePermission;