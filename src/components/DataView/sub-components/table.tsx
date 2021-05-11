import { withStyles } from '@material-ui/core/styles';
import {
    Table, 
    TableBody,
    TableCell,
    TableHead,
    TableContainer,
    TableRow, 
    TableFooter,
    TablePagination
} from '@material-ui/core';
import { Shipment } from '../../../state/shipments';

export const DataTable = (props: any) => {
    const { 
        classes, 
        shipments, 
        rowsPerPage, 
        page, 
        handleChangePage, 
        handleChangeRowsPerPage, 
        TablePaginationActions
    } = props;

    return (
        <TableContainer>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                <TableRow>
                    <StyledTableCell>Shipment ID</StyledTableCell>
                    <StyledTableCell align="right">Client Name</StyledTableCell>
                    <StyledTableCell align="right">Origin</StyledTableCell>
                    <StyledTableCell align="right">Destination</StyledTableCell>
                    <StyledTableCell align="right">Mode</StyledTableCell>
                    <StyledTableCell align="right">Estimated Departure</StyledTableCell>
                    <StyledTableCell align="right">Estimated Arrival</StyledTableCell>
                    <StyledTableCell align="right">Status</StyledTableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {shipments && 
                    ((rowsPerPage > 0
                        ? shipments.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        : shipments
                      ).map((shipment: Shipment) => (
                        <StyledTableRow key={shipment.id}>
                            <StyledTableCell component="th" scope="row">{shipment.shipmentID}</StyledTableCell>
                            <StyledTableCell align="right">{shipment.clientName}</StyledTableCell>
                            <StyledTableCell align="right">{shipment.origin}</StyledTableCell>
                            <StyledTableCell align="right">{shipment.destination}</StyledTableCell>
                            <StyledTableCell align="right">{shipment.mode}</StyledTableCell>
                            <StyledTableCell align="right">{shipment.estimatedDeparture}</StyledTableCell>
                            <StyledTableCell align="right">{shipment.estimatedArrival}</StyledTableCell>
                            <StyledTableCell align="right">{shipment.status}</StyledTableCell>
                        </StyledTableRow>
                    )))
                }
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                            colSpan={8}
                            count={shipments.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            SelectProps={{
                                inputProps: { 'aria-label': 'rows per page' },
                                native: true,
                            }}
                            onChangePage={handleChangePage}
                            onChangeRowsPerPage={handleChangeRowsPerPage}
                            ActionsComponent={TablePaginationActions}
                        />
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
    )
}

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
        position: 'relative',
        maxWidth: 60,
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        margin: 3,
        borderRight: 'solid thin rgb(238, 238, 238)',
        borderLeft: 'solid thin rgb(238, 238, 238)',
    }
}))(TableCell);
  
const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
}))(TableRow);