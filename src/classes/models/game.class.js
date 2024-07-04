class Game {
  constructor(id) {
    this.id = id;
    this.users = [];
    this.state = 'waiting'; // 'waiting', 'inProgress'
  }

  addUser(user) {
    this.users.push(user);

    if (this.users.length === 1) {
      this.startGame();
    }
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
}

export default Game;
