import { EntityActions, QueryEntity } from '@datorama/akita';
import { Observable } from 'rxjs';
import { APP } from '../../shared/constants';
import { Expression } from './filter.model';
import { FilterStore, FilterState, filterStore } from './filter.store';

export class FilterQuery extends QueryEntity<FilterState> {

  constructor(protected store: FilterStore) {
    super(store);
  }

  public get filterEntity$(): Observable<FilterState> {
    return this.selectEntityAction(EntityActions.Update);
  }

  public getQuery(id: string) {
    return this.getEntity(id);
  }

  public updateQuery(expressions: Expression[]) {
    this.store.update(APP.FILTER_ID, { expressions });
  }
}

export const filterQuery = new FilterQuery(filterStore);
