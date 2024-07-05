import { gameSessions } from './sessions.js';
import Game from '../classes/models/game.class.js';

export const addGameSession = (id) => {
  const session = new Game(id);
  gameSessions.push(session);
  session.startGame();
  console.log(`게임이 생성되었습니다.`);
  return session;
};

export const removeGameSession = () => {
  delete gameSessions[0];
};

export const getGameSession = () => {
  return gameSessions[0];
};
