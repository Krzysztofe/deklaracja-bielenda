export const rwd = (
  xs: string | number,
  sm: string | number,
  md?: string | number,
  lg?: string | number,
  xl?: string | number,
) => {
  const obj = {
    xs,
    sm,
    ...(md && { md }),
    ...(lg && { lg }),
    ...(xl && { xl }),
  };

  return obj;
};





