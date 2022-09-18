const formatNumber = (num: number) => {
  if (num < 10) {
    return "0" + num;
  }
  return num;
};

export const getFormattedDate = (date: string | null | undefined) => {
  if (date) {
    try {
      const formattedDate = new Date(date);
      const day = formatNumber(formattedDate.getDate());
      const month = formatNumber(formattedDate.getMonth() + 1);
      const year = formattedDate.getFullYear();
      return day + "-" + month + "-" + year;
    } catch {
      return "NA";
    }
  } else {
    return "NA";
  }
};

export const formatCurrency = (
  value: number,
  currency: string,
  decimal = 0
) => {
  return value.toLocaleString("en", {
    style: "currency",
    currency: currency || "USD",
    maximumFractionDigits: decimal,
    minimumFractionDigits: decimal,
  });
};
