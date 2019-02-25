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
				<tr className="col-headings">
					<th className="name-col">Team Name</th>
					<th className="col">Played</th>
					<th className="col">Won</th>
					<th className="col">Lost</th>
					<th className="col">Drawn</th>
					<th className="col">For</th>
					<th className="col">Against</th>
					<th className="col">Points</th>
				</tr>
			</thead>	
			<tbody>
				<Team name="Heaton Norris Wanderers"/>
				<Team name="Heaton Moor FC"/>
				<Team name="Heaton Chapel Town"/>
				<Team name="New Mills United"/>
				<Team name="Buxton Rangers"/>
				<Team name="Marple Bridge"/>
				<Team name="Reddish FC"/>
				<Team name="Bramhall City"/>
				<Team name="Cheadle Hulme"/>
				<Team name="Romiley Orient"/>
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
	
	incrementScore = () => {
		this.setState( prevState => {
			return {
				played: prevState.played + 1,
				won: prevState.won + 1,
				lost: prevState.lost + 1,
				drawn: prevState.drawn + 1,
				goalsFor: prevState.goalsFor + 1,
				goalsAgainst: prevState.goalsAgainst + 1,
				points: prevState.points + 1
			}
	});
  
  }

 

  render() {
    return (
		<tr className="row">
			<td className="team-name">{this.props.name}</td>
			<td className="data"><span className="left"> - </span>  {this.state.played}  <span className="right" onClick={this.incrementScore}> + </span></td>
			<td className="data"><span className="left"> - </span>  {this.state.won}  <span className="right" onClick={this.incrementScore}> + </span></td>
			<td className="data"><span className="left"> - </span>  {this.state.lost}  <span className="right" onClick={this.incrementScore}> + </span></td>
			<td className="data"><span className="left"> - </span>  {this.state.drawn}  <span className="right" onClick={this.incrementScore}> + </span></td>
			<td className="data"><span className="left"> - </span>  {this.state.goalsFor}  <span className="right" onClick={this.incrementScore}> + </span></td>
			<td className="data"><span className="left"> - </span>  {this.state.goalsAgainst}  <span className="right" onClick={this.incrementScore}> + </span></td>
			<td className="data"><span className="left"> - </span>  {this.state.points}  <span  className="right" onClick={this.incrementScore}> + </span></td>
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

$('.row').mouseenter(function () {
	$('.row').css({border: 'green solid 3px'})
	$('.row .left, .row .right').css({visibility: 'visible'})
})

$('.row').mouseleave(function () {
	$('.row').css({border: 'none'})
	$('.row .left, .row .right').css({visibility: 'hidden'})
})



// TO DO: add results input button, which updates tables and add results score to list of recent results