export const formatCurrency = (value) => {
  if (typeof value !== "number") return "";
  return `$${value.toLocaleString()}`;
};

export const formatPercentage = (value) => {
  if (typeof value !== "number") return "";
  return `${value}%`;
};

const formatters = {
  currency: formatCurrency,
  percentage: formatPercentage,
};

export const formatValue = (value, formatType) => {
  const formatter = formatters[formatType];
  if (formatter) {
    return formatter(value);
  }
  return value;
};
