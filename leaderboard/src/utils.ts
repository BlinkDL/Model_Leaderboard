export function calcRenderNumer(input: number) {
  let value: number | string = input;
  if (value < 1) {
    value = (value * 100).toFixed(1) + "%";
  } else if (value >= 100) {
    value = value.toFixed(0);
  } else if (value >= 10) {
    value = value.toFixed(1);
  } else if (value >= 1) {
    value = value.toFixed(2);
  } else if (value === 1) {
    value = "100%";
  } else {
    value = "-";
  }
  return value;
}
