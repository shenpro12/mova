export const initStar = (arr) => {
  if (arr.length) {
    let totalRate = arr.length,
      ratePoint = arr.reduce((total, currentValue) => {
        return total.point + currentValue.point;
      });
    if (typeof ratePoint === 'object') {
      ratePoint = ratePoint.point;
    }
    return { totalRate, ratePoint: ratePoint / arr.length };
  } else {
    return { totalRate: 0, ratePoint: 0 };
  }
};
