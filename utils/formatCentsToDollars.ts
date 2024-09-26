export function formatCentsToDollars(cents: number) {
  const dollars = cents / 100;
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0, // No cents
    maximumFractionDigits: 0, // No cents
  }).format(dollars);
}
