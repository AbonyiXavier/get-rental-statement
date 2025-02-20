import { ICustomer, IMovie, MovieCode } from '../interfaces';

export const customer: ICustomer = {
  name: 'Martin',
  rentals: [
    { movieId: 'F001', days: 3 },
    { movieId: 'F002', days: 1 },
    { movieId: 'F003', days: 1 },
    { movieId: 'F004', days: 1 },
  ],
};

export const movies: Record<string, IMovie> = {
  F001: { title: 'Ran', code: MovieCode.Regular },
  F002: { title: 'Trois Couleurs: Bleu', code: MovieCode.Regular },
  F003: { title: 'Sunes Sommar', code: MovieCode.Children },
  F004: { title: 'Yara', code: MovieCode.New },
};
