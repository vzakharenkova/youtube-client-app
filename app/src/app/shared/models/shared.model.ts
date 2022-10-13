import { BehaviorSubject } from 'rxjs';

export interface InputPropsModel {
  title: string;
  type: string;
  auth?: BehaviorSubject<{ [x: string]: string }>;
}

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
  Down = 'down',
  Up = 'up',
}
