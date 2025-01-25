import { formatValue } from "../utils/formatters";

export const projectColumns = [
  {
    id: "sno",
    label: "S.No.",
  },
  {
    id: "title",
    label: "Title",
  },
  {
    id: "percentageFunded",
    label: "Percentage Funded",
    format: (value) => formatValue(value, "percentage"),
  },
  {
    id: "amountPledged",
    label: "Amount Pledged",
    format: (value) => formatValue(value, "currency"),
  },
];
