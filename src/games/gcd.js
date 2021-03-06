import gameEngine from '..';
import getRandomNum from '../utils';

const gcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return gcd(num2, num1 % num2);
};
const task = 'Find the greatest common divisor of given numbers.';
const gameGcd = () => {
  const num1 = getRandomNum(1, 100);
  const num2 = getRandomNum(1, 100);
  const question = `${num1} ${num2}`;
  const rightAnswer = String(gcd(num1, num2));
  return { question, rightAnswer };
};
export default () => gameEngine(gameGcd, task);
