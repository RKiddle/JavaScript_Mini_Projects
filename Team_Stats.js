const team = {
  _games: [
    {
    opponentName: 'Everton',
    teamScore: 2,
    opponentScore: 2,
    },
    {
    opponentName: 'Chelsea',
    teamScore: 1,
    opponentScore: 0,
    },
    {
    opponentName: 'Wolves',
    teamScore: 1,
    opponentScore: 1,
    },

    
  ],
  _players: [
    {
      firstName: 'Miguel',
      lastName: 'Almirón',
      age: 25,
    },
    {
      firstName: 'Yoshinori',
      lastName: 'Muto',
      age: 27,
    },
    {
      firstName: 'Sean',
      lastName: 'Longstaff',  
      age: 22,
    },
    {
      firstName: 'Andrew',
      lastName: 'Carroll',
      age: 31,
      },
  ],
  get games() {
    return this._games;
  },
  get players() {
    return this._players;
  },
  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age,
    };
    this.players.push(player);
  },
  
  addGame(opponentName, teamScore, OpponentScore) {
    let game = {
      OpponentName: opponentName,
      teamScore: teamScore,
      OpponentScore: OpponentScore,
    };
    this.games.push(game);
  }
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

console.log(team.players);

team.addGame('Man United', 1, 4);
team.addGame('Leicester City', 0, 3);
team.addGame('Everton', 1 , 2);

console.log(team.games);
