const team = {
	_players: [
		{
			firstName: 'Daniel',
			lastName: 'Thomas',
			age: 25
		},
		{
			firstName: 'Harry',
			lastName: 'Brooks',
			age: 26
		},
		{
			firstName: 'Glenn',
			lastName: 'Key',
			age: 26
		},
		{
			firstName: 'Spencer',
			lastName: 'Marsh',
			age: 29
		},
		{
			firstName: 'Tyler',
			lastName: 'Adams',
			age: 24
		}
	],

	_games: [
		{
			track: 'Silverstone',
			teamPoints: 210,
			fastestLap: true
		},
		{
			track: 'Monza',
			teamPoints: 180,
			fastestLap: false
		},
		{
			track: 'Nurburgring',
			teamPoints: 278,
			fastestLap: true
		}
	],

	get players() {
		return this._players;
	},

	get games() {
		return this._games;
	},

	addPlayer(firstName, lastName, age) {
		const player = {
			firstName,
			lastName,
			age
		};
		this.players.push(player);
	},

	addGame(track, teamPts, fastestLap) {
		const game = {
			track,
			teamPoints: teamPts,
			fastestLap
		};
		this.games.push(game);
	}
};

team.addPlayer('Niall', 'Killin', 28);
team.addPlayer('Dan', 'Racer', 32);
team.addPlayer('Papa', 'Stimpy', 24);

team.addGame('Zandvoort', 145, false);
team.addGame('Imola', 100, true);
team.addGame('Road America', 178, true);

console.log(team.games);
console.log(team.players);
