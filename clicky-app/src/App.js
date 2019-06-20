import React, { Component } from "react";
import BandCard from "./components/BandCard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import bands from "./bands.json";

class App extends Component {
  // Setting this.state.bands to the friends json array
  state = {
    bands,
    score: 0,
    highscore: 0
  };

  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({ highscore: this.state.highscore }, function () {
        console.log(this.state.highscore);
      });
    }
    this.state.BandCard.forEach(card => {
      card.count = 0;
    });
    alert(`Game Over: ( \nscore: ${this.state.score})`);
    this.setState({ score: 0 });
    return true;
  }
  clickCount = id => {
    this.state.Bandcards.find((o, i) => {
      if (o, id === id) {
        if (BandCard[i].count === 0) {
          BandCard[i].count = BandCard[i].count + 1;
          this.setState({ score: this.state.score + 1 }, function () {
            console.log(this.state.score);
          });
          this.state.BandCard.sort(() => Math.random() - 0.5)
          return true;
        } else {
          this.gameOver();
        }
      }
    });
  }



  // removeBand = id => {
  // Filter this.state.friends for friends with an id not equal to the id being removed
  // const bands = this.state.bands.filter(band => band.id !== id);
  // Set this.state.friends equal to the new friends array
  // this.setState({ bands });
  // };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        <h1>Bands List</h1>
        {this.state.bands.map(bands => (
          <BandCard
            removeBands={this.removeBands}
            id={bands.id}
            key={bands.id}
            name={bands.name}
            image={bands.image}
            occupation={bands.occupation}
            location={bands.location}
          />
        ))}
      </div>
    );
  }
}
<Wrapper>

  <Wrapper />

  export default App;
