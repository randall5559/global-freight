import { useState } from 'react';
import { useObservable } from "@libreact/use-observable";
import { Shipment, shipmentQuery } from '../../state/shipments';

export function useDataFacade() {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [ freight ] = useObservable(shipmentQuery.selectFreight$() as any);
    const shipments = freight as Shipment[];

    const handleChangePage = (event: any, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: any) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return {
        page,
        rowsPerPage,
        shipments,
        handleChangePage,
        handleChangeRowsPerPage
    };
}