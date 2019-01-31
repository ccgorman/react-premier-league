import React, { Component } from 'react';
import './App.css';
import Display from './components/Display/Display';
import axios from './axios';

class App extends Component {

	state = {
		teams: {},
		error: false
	}

	componentDidMount () {
		axios.get()
			.then(
				response => {
					this.loadData(response.data);
				}
			)
			.catch(
				error => {
					this.setState({error: true});
				}
			);
	}
	
	loadData(matches) {
		const teams = [];
		let team1 = {};
		let team2 = {};		
		if (matches && matches.rounds) {
			for (let i = 0; i < matches.rounds.length; i++) {
				for (let j = 0; j < matches.rounds[i].matches.length; j++) {
					team1 = matches.rounds[i].matches[j].team1;
					team2 = matches.rounds[i].matches[j].team2;
					if (!teams[team1.code]) {
						teams[team1.code] = this.initTeam(team1.name);
					}
					if (!teams[team2.code]) {
						teams[team2.code] = this.initTeam(team2.name);
					}
					teams[team1.code] = this.updateTeam(teams[team1.code], matches.rounds[i].matches[j].score1, matches.rounds[i].matches[j].score2);
					teams[team2.code] = this.updateTeam(teams[team2.code], matches.rounds[i].matches[j].score2, matches.rounds[i].matches[j].score1);
				}
			}
			const sortedTeams = this.sortTeams(teams);
			this.setState({teams: {teams: this.cleanJSON(sortedTeams)}});
		}
	}
	
	initTeam (name) {
		return	{
			'name': name,
			'wins': 0,
			'draws': 0,
			'defeats': 0,
			'goalsFor': 0,
			'goalsAgains': 0,
			'goalsDifference': 0,
			'points': 0
		}
	}

	updateTeam (team, score1, score2) {
		team.wins += score1 > score2 ? 1 : 0;
		team.draws += score1 === score2 ? 1 : 0;
		team.defeats += score1 < score2 ? 1 : 0;
		team.goalsFor += score1;
		team.goalsAgains += score2;
		team.goalsDifference += score1 - score2;
		team.points += this.getPoints(score1, score2);
		return team;
	}

	getPoints (score1, score2) {
		if (score1 > score2) {
			return 3;
		} else if (score1 === score2) {
			return 1;
		}
		return 0;
	}

	sortTeams (teams) {
		const sortedTeams = [];
		for (const team in teams) {
			sortedTeams.push([team, teams[team]]);
		}
		sortedTeams.sort(function(a, b) {
			if (a[1].points === b[1].points) {
				if (a[1].goalsDifference === b[1].goalsDifference) {
					return b[1].goalsFor - a[1].goalsFor;
				}
				return b[1].goalsDifference - a[1].goalsDifference;
			}
			return b[1].points - a[1].points;
		});
		for (let rank = 1; rank < sortedTeams.length; rank++) {
			sortedTeams[rank][1].rank = rank;
		}
		return sortedTeams;
	}
	
	cleanJSON(teams) {
		const json = [];
		for (let i = 0; i < teams.length; i++) {
			json.push(teams[i][1]);
		}
		return json;
	}

	render() {
		let content = <p>Something went wrong!</p>;
		if (!this.state.error) {
			content = <Display teams={this.state.teams} />;
		}
		
		return (
			<div className="App">
				<header className="App-header">
					{content}
				</header>
			</div>
		);
	}
}

export default App;
