import React, { Component } from 'react';
import { Line } from 'rc-progress';
import './App.css';
import Wrapper from "./components/Wrapper";
import BackgroundSlider from './components/BackGroundSlider/BackgroundSlider.js'
import meChars from "./meChars.json";
import CharCard from "./components/CharCard/CharCard.js";
import UI_Display_bottom from './UI_Display_bottom.jpeg'
import image1 from './images/shepardsFistBump.jpg'




let topScore = 0;
let guessesCorrect = 1;
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

			guessesCorrect = 1;
			message = "You already clicked this! Start again.";

			for (let i = 0; i < meChars.length; i++) {
				meChars[i].clicked = false;
			}

      this.setState({message});
      console.log(message);
			this.setState({guessesCorrect:guessesCorrect});
			this.setState({meChars});

    } else {
			cardClicked[0].clicked = true;

			guessesCorrect = guessesCorrect + 7.4;
			message = "You did it! 12/12 correct!"

			if (guessesCorrect > topScore) {
				topScore = guessesCorrect;
				this.setState({topScore});
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
		<div className="bottomComponents">
			<Line 
				className="progress-bar"
				percent={this.state.guessesCorrect}
				trailWidth="12" 
				strokeWidth="12" 
				strokeColor="#9ABCC2"
				strokeLinecap="square" />
			<img className="bottom" src={UI_Display_bottom} alt="headup_display" />;
		</div>
		<BackgroundSlider
			images={[image1]}
			duration={10} transition={2} />
      </Wrapper>
    );
  }
}

export default App;
