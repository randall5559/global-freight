import DayPicker from "react-day-picker";
import { Shipment } from "../../state/shipments";

export const shipmentReformatted = (shipments: any) => {
    return shipments.map((shipment: Shipment) => { 
        return {
            "Shipment ID": shipment.shipmentID,
            "Client Name": shipment.clientName,
            "Origin": shipment.origin,
            "Destination": shipment.destination,
            "Mode": shipment.mode,
            "Estimated Departure": shipment.estimatedDeparture,
            "Estimated Arrival": shipment.estimatedArrival,
            "Status": shipment.status
        }
    });
} 

export const customRenderCompletionItem = (self: any, data: any, registerAndGetPickFunc: Function, shipmentData: any) => {
    const className = ` hint-value cm-${data.type}`;

    if(data && data.value && data.value.hasOwnProperty('customType')){
        if (data.value.customType === 'date') {
            var pick = registerAndGetPickFunc();
            return  <div className="day-picker-selection" >
            <DayPicker onDayClick={ (day) => pick(day.toLocaleDateString())  }/> </div>
        } else {
            return <div className={className} >
                {
                    shipmentData.map((shipment: any) => {
                        return (
                            <div>{shipment[data.value.category]}</div>
                        )
                    })
                }
            </div>
        }
    }
    
    return <div className={className}>
        <span style={{ fontWeight: "bold" }}>{data.value}</span>
    </div>
}