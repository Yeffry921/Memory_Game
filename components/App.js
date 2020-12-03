import React from 'react';
import '../src/index.css';
import foods from './FoodsContainer';

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			foods,
			score: 0,
			selectedFoods: []
		};
		this.handleGameLogic = this.handleGameLogic.bind(this);
		this.shuffleItems = this.shuffleItems.bind(this);
	}

	handleGameLogic(food) {
		// If the selected foods array doesn't include the food
		// Add to the array and + 1 to score
		if (!this.state.selectedFoods.includes(food.name)) {
			this.setState((prevState) => {
				return {
					selectedFoods: prevState.selectedFoods.concat(food.name),
					score: prevState.score + 1
				};
			});

			this.shuffleItems(this.state.foods)
			// If the selected food does include the food
			// Game over, score to 0 and selected goes to empty
		} else {
			this.setState({
				selectedFoods: [],
				score: 0
			});
		}
	}

	// Got this from Stack Overflow - Durstenfeld shuffle
	shuffleItems(array) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[ array[i], array[j] ] = [ array[j], array[i] ];
		}
	}

	render() {
		const { foods } = this.state;
		console.log(this.state.foods);
		return (
			<div className="container">
				<header className="header">
					<h1>Memory Game</h1>
					<p>Score: {this.state.score}</p>
				</header>

				<div className="main-container">
					{foods.map((food, index) => {
						return (
							<div key={index} className="card-container" onClick={() => this.handleGameLogic(food)}>
								<img src={food.src} alt="" />
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}
