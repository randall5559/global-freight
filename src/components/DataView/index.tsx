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
import { CreateShipmentModal } from './sub-components/modal';
  
export const DataView = () => {
    const {
        open,
        mode,
        page,
        openMenu,
        rowsPerPage,
        shipments,
        handleChangePage,
        handleChangeRowsPerPage,
        handleChange,
        handleClose,
        handleOpen,
        setEstimateDeparture,
        setEstimateArrival,
        handleMenuOpen,
        handleMenuClose,
        handleShipment
    } = useDataFacade();
    const classes = useStyles();

    return (
        <Box>
            <Box display="flex" justifyContent="space-evenly">
                <IconButton disabled>
                    <Home />
                </IconButton>
                <IconButton disabled>
                    <Public />
                </IconButton>
                <IconButton disabled>
                    <Event />
                </IconButton>
                <IconButton onClick={() => handleOpen()}>
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
            <CreateShipmentModal 
                classes={classes}
                open={open} 
                openMenu={openMenu}
                handleMenuClose={handleMenuClose}
                handleMenuOpen={handleMenuOpen}
                mode={mode} 
                handleChange={handleChange} 
                handleClose={handleClose} 
                handleOpen={handleOpen}
                setEstimateDeparture={setEstimateDeparture}
                setEstimateArrival={setEstimateArrival}
                handleShipment={handleShipment}
            />
        </Box>
    );
}

export default DataView;