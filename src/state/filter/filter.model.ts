import { ID } from '@datorama/akita';

export interface Expression {
  category?: string; 
  operator?: string;
  value?: string;
  conditionType?: string;
}

export interface Filter {
  id: ID;
  expressions: Expression[];
}

export function createFilter(params: Partial<Filter>) {
  return {
    ...params
  } as Filter;
}
