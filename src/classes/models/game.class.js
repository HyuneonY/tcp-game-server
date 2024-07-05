import { createLocationUpdatePacket } from '../../utils/notification/game.notification.js';

class Game {
  constructor(id) {
    this.id = id;
    this.users = [];
    this.state = 'waiting'; // 'waiting', 'inProgress'
  }

  addGameUser(user) {
    this.users.push(user);
  }

  getUser(userId) {
    return this.users.find((user) => user.id === userId);
  }

  removeUser(userId) {
    this.users = this.users.filter((user) => user.id !== userId);

    if (this.users.length < 1) {
      this.state = 'waiting';
    }
  }

  startGame() {
    this.state = 'inProgress';
  }

  getOthersLocation(userId) {
    const locationData = this.users
      .filter((user) => user.id !== userId)
      .map((user) => {
        return { id: user.id, playerId: user.playerId, x: user.x, y: user.y };
      });
    return createLocationUpdatePacket(locationData);
  }

  getAllUserIds() {
    return this.users.map((user) => user.id);
  }
}

export default Game;
