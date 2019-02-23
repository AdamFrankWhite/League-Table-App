const Header = (props) => {
	return (
		<header>
			<h1>{props.title}</h1>
			<span className="gamesRem">Games Remaining: {props.remaining}</span>
		</header>	
	)
}

const Table = (props) => {
	return (
		<table>
			<thead>
				<tr className="row">
					<th>Team Name</th>
					<th>Player</th>
					<th>Won</th>
					<th>Lost</th>
					<th>Drawn</th>
					<th>For</th>
					<th>Against</th>
					<th>Points</th>
				</tr>
			</thead>	
			<tbody>
				<Team name="Heaton Norris Wanderers"/>
			</tbody>			
		</table>
		
	)

}

	


class Team extends React.Component {
	state = {
		played: 0,
		won: 0,
		lost: 0,
		drawn: 0,
		goalsFor: 0,
		goalsAgainst: 0,
		points: 0
	}
	addResults = () => {
    this.setState( prevState => {
      return {
        played: prevState.played + 1,
		won: prevState.won +1,
		goalsFor: prevState.goalsFor + 1,
		points: prevState.points + 3
      }
    });
  
  }

 

  render() {
    return (
		<tr>
			<td className="team-name">Heaton Norris Wanderers</td>
			<td className="data">{this.state.played}</td>
			<td className="data">{this.state.won}</td>
			<td className="data">{this.state.lost}</td>
			<td className="data">{this.state.drawn}</td>
			<td className="data">{this.state.goalsFor}</td>
			<td className="data">{this.state.goalsAgainst}</td>
			<td className="data">{this.state.points}</td>
		</tr>	
  )
}
}


const App = (props) => {
	return (
		<div className="scoreboard">
			<Header title="Cheshire West League" remaining={10} />
			<Table />
		</div>

	
	)

}

ReactDOM.render(
	<App />,
	document.getElementById('root')
)