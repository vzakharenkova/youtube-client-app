import { BehaviorSubject } from 'rxjs';

export interface FormModel {
  [formFieldTitle: string]: string;
}

export interface InputPropsModel {
  title: string;
  type: string;
  auth?: BehaviorSubject<{ [x: string]: string }>;
}

export enum NavRoute {
  Main = '/youtube',
  Registration = '/auth/registration',
  Login = '/auth/login',
  Video = '/youtube/video',
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

export enum StorageItem {
  Token = 'token',
  UserName = 'userName',
}

interface Thumbnail {
  url: string;
  width: number;
  height: number;
}
export interface Thumbnails {
  default: Thumbnail;
  medium: Thumbnail;
  high: Thumbnail;
  standard: Thumbnail;
  maxres: Thumbnail;
}
