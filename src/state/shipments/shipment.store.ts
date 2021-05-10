import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Shipment } from './shipment.model';

export interface ShipmentState extends EntityState<Shipment> {}

@StoreConfig({
  name: 'shipment'
})
export class ShipmentStore extends EntityStore<ShipmentState> {

  constructor() {
    super();
  }

}

export const shipmentStore = new ShipmentStore();
