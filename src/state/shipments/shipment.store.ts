import { EntityState, EntityStore, guid, StoreConfig } from '@datorama/akita';
import { createShipment, Shipment } from './shipment.model';
import shipments from '../../shared/shipments.json';

export interface ShipmentState extends EntityState<Shipment> {};

@StoreConfig({
  name: 'shipment'
})
export class ShipmentStore extends EntityStore<ShipmentState> {

  constructor() {
    super();

    shipments.forEach(shipment => this.add(createShipment({
      id: guid(),
      ...shipment
    })));
  }

}

export const shipmentStore = new ShipmentStore();
