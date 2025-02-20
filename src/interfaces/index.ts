export enum MovieCode {
  Regular = 'regular',
  New = 'new',
  Children = 'children',
}

export interface IMovie {
  title: string;
  code: MovieCode;
}

export interface IRental {
  movieId: string;
  days: number;
}

export interface ICustomer {
  name: string;
  rentals: IRental[];
}
