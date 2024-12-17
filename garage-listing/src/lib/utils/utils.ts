export const formatToDollar = (amount: number): string => {
  if (isNaN(amount)) return "$0";

  const roundedAmount = Math.round(amount * 100) / 100;
  const [dollars, cents] = roundedAmount.toFixed(2).split(".");

  const formattedDollars = Number(dollars).toLocaleString();
  const formattedCents = cents === "00" ? "" : `.${cents}`;

  return `$${formattedDollars}${formattedCents}`;
};
