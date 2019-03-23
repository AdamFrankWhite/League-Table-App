// ==== Components ====

const Header = (props) => {
	return (
		<header>
			<h1>{props.title}</h1>
			<p>Click on table to edit points...</p>
		</header>	
	)
}

const Table = (props) => {
	return (
		<table>
			<thead>
				<tr>
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
	// addResults = () => {
    // this.setState( prevState => {
      // return {
        // played: prevState.played + 1,
		// won: prevState.won +1,
		// goalsFor: prevState.goalsFor + 1,
		// points: prevState.points + 3
      // }
    // });
	// }
	
	// Increments
	
	incrementPlayed = () => {
		this.setState( prevState => {
			return {
				played: prevState.played + 1,
			}
		});
	}
	
	incrementWon = () => {
		this.setState( prevState => {
			return {
				won: prevState.won + 1,
			}
		});
	}
	
	incrementLost = () => {
		this.setState( prevState => {
			return {
				lost: prevState.lost + 1,
			}
		});
	}
	
	incrementDrawn = () => {
		this.setState( prevState => {
			return {
				drawn: prevState.drawn + 1,
			}
		});
	}
	
	incrementGoalsFor = () => {
		this.setState( prevState => {
			return {
				goalsFor: prevState.goalsFor + 1,
			}
		});
	}
	
	incrementGoalsAgainst = () => {
		this.setState( prevState => {
			return {
				goalsAgainst: prevState.goalsAgainst + 1,
			}
		});
	}
	
	incrementPoints = () => {
		this.setState( prevState => {
			return {
				points: prevState.points + 1,
			}
		});
	}
  // Decrements ====
  
	decrementPlayed = () => {
		this.setState( prevState => {
			return {
				played: prevState.played - 1,
			}
		});
	}
	
	decrementWon = () => {
		this.setState( prevState => {
			return {
				won: prevState.won - 1,
			}
		});
	}
	
	decrementLost = () => {
		this.setState( prevState => {
			return {
				lost: prevState.lost - 1,
			}
		});
	}
	
	decrementDrawn = () => {
		this.setState( prevState => {
			return {
				drawn: prevState.drawn - 1,
			}
		});
	}
	
	decrementGoalsFor = () => {
		this.setState( prevState => {
			return {
				goalsFor: prevState.goalsFor - 1,
			}
		});
	}
	
	decrementGoalsAgainst = () => {
		this.setState( prevState => {
			return {
				goalsAgainst: prevState.goalsAgainst - 1,
			}
		});
	}
	
	decrementPoints = () => {
		this.setState( prevState => {
			return {
				points: prevState.points + 1,
			}
		});
	}

	// Rending

  render() {
    return (
		<tr className="row">
			<td className="team-name">{this.props.name}</td>
			<td className="data">
				<span unselectable="on" className="left" onClick={this.decrementPlayed}>-</span>
				{this.state.played}  
				<span unselectable="on" className="right" onClick={this.incrementPlayed}>+</span>
			</td>
			<td className="data">
				<span className="left" onClick={this.decrementWon}>-</span>
				{this.state.won}
				<span className="right" onClick={this.incrementWon}>+</span>
			</td>
			<td className="data">
				<span className="left" onClick={this.decrementLost}>-</span>
				{this.state.lost}
				<span className="right" onClick={this.incrementLost}>+</span>
			</td>
			<td className="data">
				<span className="left" onClick={this.decrementDrawn}>-</span>
				{this.state.drawn}
				<span className="right" onClick={this.incrementDrawn}>+</span>
			</td>
			<td className="data">
				<span className="left" onClick={this.decrementGoalsFor}>-</span>
				{this.state.goalsFor}
				<span className="right" onClick={this.incrementGoalsFor}>+</span>
			</td>
			<td className="data">
				<span className="left" onClick={this.decrementGoalsAgainst}>-</span>
				{this.state.goalsAgainst}
				<span className="right" onClick={this.incrementGoalsAgainst}>+</span>
			</td>
			<td className="data">
				<span className="left" onClick={this.decrementPoints}>-</span> 
				{this.state.points}
				<span className="right" onClick={this.incrementPoints}>+</span>
			</td>
		</tr>	
  )
}
}

// === Main App Component ===

const App = (props) => {
	return (
		<div className="scoreboard">
			<Header title="CHESHIRE WEST LEAGUE" remaining={10} />
			<Table />
		</div>

	
	)

}

ReactDOM.render(
	<App />,
	document.getElementById('root')
)

// ==== Event listeners ====

$(document).on("mouseenter", ".data", function(e) {
	$(this).css("background","orange");
});

$(document).on("mouseleave", ".data", function(e) {
	$(this).css("background","");
});

$('.data').on('click', function (event) {  // provides editing functionality for each cell
	let $target = $(event.target)
	// $($target).css({border: 'white solid 2px', width: '21px', height: '16px'})
	$($target).children().css({visibility: 'visible'})
	
	// off-click listener: if target of second click is not original target or one of it's children -- 
	$(document).on('click', function (event) {
		if (!$target.is(event.target) && $target.has(event.target).length === 0) { 
			console.log("boo")
			$($target).children().css({visibility: 'hidden'});
			// $($target).css({border: 'none', width: '25px', height: '20px'})
		}
	});	
	
})




// TO DO: add results input button, which updates tables and add results score to list of recent results