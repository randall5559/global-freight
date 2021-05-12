import { useState, useEffect } from 'react';
import { Shipment, shipmentQuery } from '../../state/shipments';
import { Expression, Filter, filterQuery } from '../../state/filter';
import { APP } from '../../shared/constants';

export function useDataFacade() {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [shipments, setShipments] = useState(shipmentQuery.getShipments());
    const [open, setOpen] = useState(false);
    const [mode, setMode] = useState('Rail');
    const [openMenu, setOpenMenu] = useState(false);
    const [estimateDeparture, setEstimateDeparture] = useState(); 
    const [estimateArrival, setEstimateArrival] = useState();
  
    const handleChange = (event: any) => {
        setMode(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleMenuClose = () => {
        setOpenMenu(false);
    };

    const handleMenuOpen = () => {
        setOpenMenu(true);
    };

    const handleChangePage = (event: any, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: any) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleShipment = () => {
        shipmentQuery.addShipment();

        const freight = shipmentQuery.getShipments();
        setShipments(freight as Shipment[]);  
        
        handleClose();
    }

    useEffect(() => {
        filterQuery.filterEntity$
            .subscribe(([id]: any) => {
                const { expressions } = filterQuery.getQuery(id) as Filter;
                
                if (Array.isArray(expressions)) {
                    const exprReformatted = expressions.map((expression: Expression) => {
                        const keyCategory = APP.FILTER_VIEW.OPTIONS.filter(
                            (opt: {columnField: string, columnText: string, type: string}) => opt.columnText === expression.category
                        )[0].columnField;
                        return { ...expression, category: keyCategory };
                    });                    

                    const freight = shipmentQuery.getShipments(exprReformatted);
                    setShipments(freight as Shipment[]);   
                }
            });
    }, []);

    return {
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
    };
}