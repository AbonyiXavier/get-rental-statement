import { IMovie, MovieCode } from "../interfaces";
import { BASE_PRICES, EXTRA_CHARGE, EXTRA_DAYS_THRESHOLD } from "./constant";

export const calculateRentalAmount = (movie: IMovie, daysRented: number): number => {
  const { code } = movie;
  
  if (!code) {
    throw new Error(`Unsupported movie type: ${code}`);
  }
  
  if (code === MovieCode.New) {
    return daysRented * BASE_PRICES.new;
  }

  const basePrice = BASE_PRICES[code];
  const threshold = EXTRA_DAYS_THRESHOLD[code] || 0;

  const totalCost = daysRented > threshold
  ? basePrice + (daysRented - threshold) * EXTRA_CHARGE
  : basePrice;

  return totalCost;
};

export const calculateFrequentRenterPoints = (
  movie: IMovie,
  daysRented: number
): number => {
  return movie.code === MovieCode.New && daysRented > 2 ? 2 : 1;
};

export const formatRentalReport = (
  customerName: string,
  rentalsDetails: string[],
  totalAmount: number,
  frequentRenterPoints: number,
): string => {
  return `
📜 Rental Record for ${customerName}
--------------------------------------
${rentalsDetails.join('\n')}
--------------------------------------
💰 Total amount owed is: $${totalAmount.toFixed(2)}
🏆 Frequent renter points earned: ${frequentRenterPoints}
`;
};
