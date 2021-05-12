import { ID } from '@datorama/akita';
import { FilterStore, filterStore } from './filter.store';

export class FilterService {

  constructor(private filterStore: FilterStore) {
  }

}

export const filterService = new FilterService(filterStore);
