
const randomInteger = (min, max) => {
  min = Math.ceil(min);
  max = (Math.floor(max));
  return Math.floor(Math.random() * (max - min + 1) + min);
}
// eslint-disable-next-line no-console
console.log(randomInteger(10, 5));
