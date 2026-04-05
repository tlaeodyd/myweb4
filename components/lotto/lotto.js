export const generateLottoNumbers = () => {
  const lottoSet = new Set();

  while (lottoSet.size < 6) {
    lottoSet.add(Math.floor(Math.random() * 45) + 1);
  }

  return Array.from(lottoSet).sort((a, b) => a - b);
};
