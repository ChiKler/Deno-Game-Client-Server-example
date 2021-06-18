export function number_to_formatted_string(num, separation_char)
{
  return (
    new Number(num).toFixed(3).toString().replace(/\B(?=(\d{3})+(?!\d))/g, `${separation_char}`)
  );
};