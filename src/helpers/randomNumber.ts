export const randomNumber = (min: number, max: number) => {
  const random = min + Math.random() * (max + 1 - min);

  return Math.floor(random);
};
