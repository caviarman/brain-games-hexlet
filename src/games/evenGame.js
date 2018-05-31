import gameEngine from '..';
import { getRandomNum, isEven } from '../utils';

const task = 'Answer "yes" if number even otherwise answer "no".';
const game = () => {
  const question = getRandomNum(3, 301);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return { question, rightAnswer };
};
export default () => gameEngine(game, task);