export const APP = {
    FILTER_ID: 'filterId',
    FILTER_VIEW: {
        OPERATORS: ['==', '!=', 'contains', '!contains', 'after', 'before', 'same'],
        OPTIONS: [
            {
                columnField: "shipmentID",
                columnText: "Shipment ID",
                type:"selection"
            },
            {
                columnField: "clientName",
                columnText: "Client Name",
                type:"selection"
            },
            {
                columnField: "origin",
                columnText: "Origin",
                type:"text"
            },
            {
                columnField: "destination",
                columnText: "Destination",
                type:"text"
            },
            {
                columnField: "mode",
                columnText: "Mode",
                type:"selection"
            },
            {
                columnField: "estimatedDeparture",
                columnText: "Estimated Departure",
                type:"text"
            },
            {
                columnField: "estimatedArrival",
                columnText: "Estimated Arrival",
                type:"text"
            },
            {
                columnField: "status",
                columnText: "Status",
                type:"selection" 
            },
        ]
    }
}