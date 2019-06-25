import React, { Component } from 'react';
import './App.css';
import Wrapper from "./components/Wrapper";
import meChars from "./meChars.json";
import CharCard from "./components/CharCard/CharCard.js";

let topScore = 0;
let guessesCorrect = 0;
// let hearts = 0;
let message = "";

//sets state for our components
class App extends Component {
  state = {
		meChars,
		topScore,
		guessesCorrect,
    message,
	};

	setClicked = id => {
		const meChars = this.state.meChars;
    const cardClicked = meChars.filter(meChar => meChar.id === id);

		if (cardClicked[0].clicked) {

			guessesCorrect = 0;
			message = 'Whoops. Start over';

			for (let i = 0; i < meChars.length; i++) {
				meChars[i].clicked = false;
			}

      this.setState({message});
      console.log(message);
			this.setState({guessesCorrect:guessesCorrect});
			this.setState({meChars});

    } else {
			cardClicked[0].clicked = true;

			guessesCorrect = guessesCorrect + 1;
			message = "Good Job!"

			if (guessesCorrect > topScore) {
				topScore = guessesCorrect;
				// hearts++;
				// this.setState({hearts});
				this.setState({topScore});
				// this.renderHearts();
			}

			meChars.sort((a, b) => {
				return 0.5 - Math.random();
			});

			this.setState({meChars});
      this.setState({guessesCorrect});
      console.log(this.state.guessesCorrect)
			this.setState({message});
    }
    console.log(cardClicked);

	};

  // Map over this.state.meChars and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        {this.state.meChars.map(meChar => (
          <CharCard
            setClicked={this.setClicked}
            id={meChar.id}
            key={meChar.id}
            image={meChar.image}
            name={meChar.name}
            
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
