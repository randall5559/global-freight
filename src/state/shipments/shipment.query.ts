import { QueryEntity } from '@datorama/akita';
import { ShipmentStore, ShipmentState, shipmentStore } from './shipment.store';
import { Observable } from 'rxjs';
import { Shipment } from './shipment.model';

type Filter = { key: never, value?: any };

export class ShipmentQuery extends QueryEntity<ShipmentState> {

  constructor(protected store: ShipmentStore) {
    super(store);
  }

  public selectFreight$(expr = '', { key, value }: Filter = { key: '' as never }): Observable<ShipmentState> {
    return this.selectAll({
      filterBy: (entity: Shipment) => {
        switch (expr) {
          case 'CONTAINS':
            return (entity[key] as string).includes(value);
          case 'EQUALS':
            return entity[key] === value;
          case 'NOT_EQUALS':
              return entity[key] !== value;
          default:
            return true;
        }
      }
    })
  }
}

export const shipmentQuery = new ShipmentQuery(shipmentStore);
