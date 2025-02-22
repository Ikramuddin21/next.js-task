export const formatNumber = (num: number | any) => {
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, "") + "k";
  } else if (num >= 100) {
    return (num / 1000).toFixed(1).replace(/\.0$/, "") + "k"; // 999 → 0.9k
  }
  return num;
};
