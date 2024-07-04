import { gameSessions } from './sessions.js';
import Game from '../classes/models/game.class.js';

export const addGameSession = () => {
  const session = new Game(1);
  gameSessions.push(session);
  session.startGame();
  console.log(`게임이 생성되었습니다.`);
  return session;
};

export const removeGameSession = (id) => {
  const index = gameSessions.findIndex((session) => session.id === id);
  if (index !== -1) {
    return gameSessions.splice(index, 1)[0];
  }
};

export const getGameSession = () => {
  return gameSessions.find((session) => session.id === 1);
};

export const getAllGameSessions = () => {
  return gameSessions;
};
