import {
    Box,
    IconButton
} from '@material-ui/core';

import {
    Home,
    Public,
    Event,
    AddBox
} from '@material-ui/icons';

import { useStyles } from './style';
import { useDataFacade } from './hook';
import { TablePaginationActions } from './sub-components/pagination';
import { DataTable } from './sub-components/table';
  
export const DataView = () => {
    const {
        page,
        rowsPerPage,
        shipments,
        handleChangePage,
        handleChangeRowsPerPage
    } = useDataFacade();
    const classes = useStyles();

    return (
        <Box>
            <Box display="flex" justifyContent="space-evenly">
                <IconButton>
                    <Home />
                </IconButton>
                <IconButton>
                    <Public />
                </IconButton>
                <IconButton>
                    <Event />
                </IconButton>
                <IconButton>
                    <AddBox />
                </IconButton>
            </Box>
            <DataTable 
                classes={classes}
                shipments={shipments} 
                rowsPerPage={rowsPerPage} 
                page={page}
                handleChangePage={handleChangePage} 
                handleChangeRowsPerPage={handleChangeRowsPerPage} 
                TablePaginationActions={TablePaginationActions}
            />
        </Box>
    );
}

export default DataView;