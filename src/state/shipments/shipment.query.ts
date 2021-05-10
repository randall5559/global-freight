import { QueryEntity } from '@datorama/akita';
import { ShipmentStore, ShipmentState, shipmentStore } from './shipment.store';

export class ShipmentQuery extends QueryEntity<ShipmentState> {

  constructor(protected store: ShipmentStore) {
    super(store);
  }

}

export const shipmentQuery = new ShipmentQuery(shipmentStore);
