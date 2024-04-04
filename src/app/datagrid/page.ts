import {Customer} from './customer';

export interface Page {
  content:Customer[],
  pageable: {
    short: {
      empty: boolean,
      shorted: boolean,
      unshorted: boolean,
    },
    offset: number,
    pageSize: number,
    pageNumber: number,
    unpaged: boolean,
    paged: boolean,
  },
  last: boolean,
  totalPages: number,
  totalElements: number,
  size: number,
  number: number,
  short: {
    empty: boolean,
    shorted: boolean,
    unshorted: boolean,
  },
  numberOfElements: number,
  first: boolean,
  empty: boolean,


}
