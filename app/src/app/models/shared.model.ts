export type SortingCriteria = {
  term?: string;
  sortingType?: SortingType | null;
  sortingOrder?: SortingOrder | null;
};

export enum SortingType {
  Date = 'date',
  Views = 'views',
}

export enum SortingOrder {
  Up = 'up',
  Down = 'down',
}
