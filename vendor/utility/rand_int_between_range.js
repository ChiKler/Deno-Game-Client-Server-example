export function rand_int_between_range(min, max)
{
  const random_float_between_range = ((Math.random() * (max - min + 1)) + min);
  
  return (random_float_between_range - (random_float_between_range % 1));
};