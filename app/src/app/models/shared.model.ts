export type SortingBy = 'date' | 'views' | null;

export type SortingOrder = 'up' | 'down' | null;

export type SortingCriteria = {
  term?: string;
  sortingBy?: SortingBy;
  sortingOrder?: SortingOrder;
};
