import { ID } from '@datorama/akita';
import { ShipmentStore, shipmentStore } from './shipment.store';

export class ShipmentService {

  constructor(private shipmentStore: ShipmentStore) {
  }

}

export const shipmentService = new ShipmentService(shipmentStore);
