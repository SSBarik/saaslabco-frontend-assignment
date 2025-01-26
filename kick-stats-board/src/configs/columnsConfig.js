import { formatValue } from "@utils/formatters";

export const projectColumns = [
  {
    id: "sno",
    label: "S.No.",
    align: "center",
  },
  {
    id: "title",
    label: "Title",
    minWidth: 400,
  },
  {
    id: "percentageFunded",
    label: "Percentage Funded",
    minWidth: 100,
    align: "center",
    format: (value) => formatValue(value, "percentage"),
  },
  {
    id: "amountPledged",
    label: "Amount Pledged",
    minWidth: 150,
    format: (value) => formatValue(value, "currency"),
  },
];
