import { ICustomer, IMovie } from "./interfaces";
import { customer, movies } from "./sampleData";
import { calculateFrequentRenterPoints, calculateRentalAmount, formatRentalReport } from "./utils";

const generateRentalStatement = (
  customer: ICustomer,
  movies: Record<string, IMovie>,
): string => {
  let totalAmount = 0;
  let frequentRenterPoints = 0;

  const { name, rentals } = customer;
  
  const rentalsDetails = rentals.map(({ movieId, days }) => {
    const movie = movies[movieId];
    if (!movie) {
      throw new Error(`Movie with ID ${movieId} not found.`);
    }

    const rentalAmount = calculateRentalAmount(movie, days);
  
    totalAmount += rentalAmount;
    frequentRenterPoints += calculateFrequentRenterPoints(movie, days);

    return `🎬 ${movie.title} - ${days} day(s) - $${rentalAmount.toFixed(2)}`;
  });

  return formatRentalReport(
    name,
    rentalsDetails,
    totalAmount,
    frequentRenterPoints,
  );
};

console.log(generateRentalStatement(customer, movies));
