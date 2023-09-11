export const numbersFractionCalculator = (numbers: number[]) => {
  const total: number = numbers.length;
  let positiveCount: number = 0;
  let negativeCount: number = 0;
  let zeroesCount: number = 0;
  let result = {
    positives: '',
    negative: '',
    zeros: '',
  };

  numbers.forEach(function (value) {
    if (value > 0) positiveCount++;
    if (value < 0) negativeCount++;
    if (value === 0) zeroesCount++;
  });

  result.positives = (positiveCount / total).toFixed(6);
  result.negative = (negativeCount / total).toFixed(6);
  result.zeros = (zeroesCount / total).toFixed(6);

  return result;
};
