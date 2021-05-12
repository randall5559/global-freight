import { useState, useEffect } from 'react';
import { Shipment, shipmentQuery } from '../../state/shipments';
import { Expression, Filter, filterQuery } from '../../state/filter';
import { APP } from '../../shared/constants';

export function useDataFacade() {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [shipments, setShipments] = useState(shipmentQuery.getShipments());

    const handleChangePage = (event: any, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: any) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

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
        page,
        rowsPerPage,
        shipments,
        handleChangePage,
        handleChangeRowsPerPage
    };
}