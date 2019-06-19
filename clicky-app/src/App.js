import React, { Component } from "react";
import bands from "./components/BandsCard";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Container from "./Container";

import Row from "./Row";
import Column from "./Column";
import bands from "./bands.json";
import "./App.css";


function randomBands(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class App extends Component {

  state = {
    bands,
    currentScore: 0,
    topScore: 0,
    correctIncorrect: "",
    clicked: [],
  };

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      correctIncorrect: "You guessed correctly!"
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    }
    else if (newScore === 12) {
      this.setState({ correctIncorrect: "You win!" });
    }
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      correctIncorrect: "You guessed incorrectly!",
      clicked: []
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuffledBands = randomBands(bands);
    this.setState({ bands: shuffledBands });
  };

  render() {
    return (
      <Wrapper>
        <Nav
          title="React Clicky Game"
          score={this.state.currentScore}
          topScore={this.state.topScore}
          correctIncorrect={this.state.correctIncorrect}
        />

        <Title>
          Click on a band and rack up some points!
        </Title>
        <Container>
          <Row>
            {this.state.bands.map(bands => (
              <Column size="md-3 sm-6">
                <BandCard
                  key={bands.id}
                  handleClick={this.handleClick}
                  handleIncrement={this.handleIncrement}
                  handleReset={this.handleReset}
                  handleShuffle={this.handleShuffle}
                  id={bands.id}
                  image={bands.image}
                />
              </Column>
            ))}
          </Row>
        </Container>

      </Wrapper>
    );
  }
}
export default App;