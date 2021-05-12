import { QueryEntity } from '@datorama/akita';
import { ShipmentStore, ShipmentState, shipmentStore } from './shipment.store';
import { Observable, Subject } from 'rxjs';
import moment from 'moment';
import { Shipment } from './shipment.model';
import { Expression } from '../filter/filter.model';

export class ShipmentQuery extends QueryEntity<ShipmentState> {

  constructor(protected store: ShipmentStore) {
    super(store);
  }

  public get fetchShipments$(): Observable<ShipmentState> {
    return this.store.selectEntityAction$;
  }

  public getShipments(expressions: Expression[] = []): ShipmentState {
    return this.getAll({
      filterBy: (entity: Shipment) => {
        return expressions.every((expression: Expression) => {
          switch (expression.operator) {
            case 'contains':
              return (entity[expression.category as never] as string).toLowerCase().includes((expression.value as string).toLowerCase());
            case '!contains':
              return !(entity[expression.category as never] as string).toLowerCase().includes((expression.value as string).toLowerCase());
            case '==':
                return entity[expression.category as never] === expression.value;
            case '!==':
                return entity[expression.category as never] !== expression.value;
            case 'after':
                return moment(entity[expression.category as never]).isSameOrAfter(expression.value);
            case 'before':
                return moment(entity[expression.category as never]).isSameOrBefore(expression.value);
            case 'same':
                return moment(entity[expression.category as never]).isSame(expression.value);
          }
        })
      }
    })
  }
}

export const shipmentQuery = new ShipmentQuery(shipmentStore);
