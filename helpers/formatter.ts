export const getHours = (number: number) => {
  return Math.round(number / 60);
};

export const getMinutes = (number: number) => {
  return Math.round(number % 60);
};

export const formatRunTime = (number: number) => {
  return `${getHours(number)}h ${getMinutes(number)}m`;
};

export const formatGenres = (arr: { name: string }[]) => {
  return arr.map((i: { name: string }) => i?.name).join(", ");
};
