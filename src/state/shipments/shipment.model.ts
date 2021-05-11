import { ID } from "@datorama/akita";

export interface Shipment {
  id: ID;
  shipmentID: string,
	clientName: string,
	origin: string,
	destination: string,
	mode: string,
	estimatedDeparture: string,
	estimatedArrival: string,
	status: string
}

export function createShipment(params: Partial<Shipment>) {
  return {
    ...params
  } as Shipment;
}
