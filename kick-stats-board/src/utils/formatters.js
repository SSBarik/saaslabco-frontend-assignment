export const formatCurrency = (value, currency = "USD") => {
  if (typeof value !== "number") return "";

  return `${currency.toUpperCase()} ${new Intl.NumberFormat().format(value)}`;
};

export const formatPercentage = (value) => {
  if (typeof value !== "number") return "";
  return `${value}%`;
};

const formatters = {
  currency: formatCurrency,
  percentage: formatPercentage,
};

export const formatValue = (value, formatType, currency = "USD") => {
  const formatter = formatters[formatType];
  if (formatter) {
    return formatter(value, currency);
  }
  return value;
};
