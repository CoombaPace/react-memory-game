import React, { Component } from 'react';
import { Line } from 'rc-progress';
import './App.css';
import Wrapper from "./components/Wrapper";
import Header from "./components/Header/Header.js";
import Modal from './components/Modal/Modal'
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import CharCard from "./components/CharCard/CharCard.js";
import BackgroundSlider from './components/BackGroundSlider/BackgroundSlider.js'
import meChars from "./meChars.json";
import UI_Display_bottom from './UI_Display_bottom.jpeg'
import UI_Display_left from './UI_Display_left.jpeg'
import UI_Displa_right from './UI_Displa_right.jpeg'
import UI_weapons from './UI_Display_weapons.jpeg'
import UI_map from './UI_Display_map.jpeg'
import image1 from './images/shepardsFistBump.jpg'
import image2 from './images/chars.jpg'





let score = 0;
let topScore = 0;
let guessesCorrect = 0;
let message = "";
let showModal = null;

// Set State
class App extends Component {
  state = {
		showModal,
		meChars,
		topScore,
		guessesCorrect,
		message,
		score,
	};

    handleShowMessageClick = () => this.setState({showModal: true})
    handleCloseModal = () => this.setState({showModal: false})

	setClicked = id => {
		const meChars = this.state.meChars;
		const cardClicked = meChars.filter(meChar => meChar.id === id);

		// If this Character Card has been clicked...
		if (cardClicked[0].clicked) {
			this.handleShowMessageClick(); //...set showModal to true, pop it open....
			message = `OH NO! You've already clicked ${cardClicked[0].charname}!` // ...show this message...
			guessesCorrect = 0; // ...set these scores...
			score = 0;

			for (let i = 0; i < meChars.length; i++) {
				meChars[i].clicked = false;
			}
			//...set these states (reset these values in this case) to restart the game.
      		this.setState({message});
			  console.log(message);
			this.setState({guessesCorrect:guessesCorrect});
			this.setState({meChars});

	} else {
			cardClicked[0].clicked = true;
			guessesCorrect = guessesCorrect + 8; // set at 8 to fill up progress bar.
			score++;

			if (score > topScore) {
				topScore = score;
				this.setState({topScore});
			}

			if (guessesCorrect === 96) {
				this.handleShowMessageClick();
				message = `You did it! 12/12 correct!`
				guessesCorrect = 0;
				score = 0;

			for (let i = 0; i < meChars.length; i++) {
				meChars[i].clicked = false;
			}

      		this.setState({message});
			console.log(message);
			this.setState({guessesCorrect:guessesCorrect});
			this.setState({meChars});
			}

			meChars.sort((a, b) => {
				return 0.5 - Math.random();
			});

			this.setState({meChars});
      		this.setState({guessesCorrect});
			  console.log(this.state.guessesCorrect)
			  console.log(score)
			this.setState({message});
    }
    		console.log(cardClicked);

	};

	
  // Map over this.state.meChars and render a meChar Card component for each ME Character object in meChars.json
  render() {
    return (
		
      <Wrapper>
		  <Header score={score} topScore={topScore} className="noShadow"> </Header>
          	{this.state.showModal ? (
				<Modal onClose={this.handleCloseModal}>
					{message}
				</Modal>
			) : null}
		<Grid container spacing={4} id="mainGrid">
        	<Grid item xs>
				<img className="leftSide" src={UI_Display_left} alt="left_display" />
        	</Grid>

       	    <GridList cols={3}>
				{this.state.meChars.map(meChar => (
					<CharCard
						setClicked={this.setClicked}
						id={meChar.id}
						key={meChar.id}
						image={meChar.image}
						charname={meChar.charname}
					/>
				))} 
        	</GridList>

        	<Grid item xs>
		  		<img className="rightSide" src={UI_Displa_right} alt="right_side_display" />;
        	</Grid>
      	</Grid>

	  	<Grid item xs={3} className="bottomGrid">
			<Line 
				className="progress-bar"
				percent={this.state.guessesCorrect}
				trailWidth="12" 
				strokeWidth="12" 
				strokeColor="#9ABCC2"
				strokeLinecap="square" 
			/>
		</Grid>
	  	<Grid container spacing={3}
			direction="row"
			justify="center"
			alignItems="center">

		
			<Grid item xs>
				<img className="weapons" src={UI_weapons} alt="weapon_display" />;
        	</Grid>
			
			<Grid item xs={6}>
				<img className="bottom" src={UI_Display_bottom} alt="headup_display" />
			</Grid>

			<Grid item xs>
				<img className="map" src={UI_map} alt="map_display" />;
			</Grid>
		</Grid>

		<BackgroundSlider
			images={[image1, image2]}
			duration={10} transition={2} />
      </Wrapper>
    );
  }
}

export default App;
