import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { APP } from '../../shared/constants';
import { Filter } from './filter.model';

export interface FilterState extends EntityState<Filter> {}

@StoreConfig({
  name: 'filter'
})
export class FilterStore extends EntityStore<FilterState> {

  constructor() {
    super();

    this.add({ id: APP.FILTER_ID, expressions: [] });
  }

}

export const filterStore = new FilterStore();
