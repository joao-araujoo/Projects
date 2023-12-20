export default function formatCurrency(value, currency = "BRL") {
  return value.toLocaleString("pt-br", {
    style: "currency",
    currency,
  });
}