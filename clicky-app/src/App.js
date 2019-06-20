import React, { Component } from "react";
import BandCard from "./components/BandCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import bands from "./bands.json";

class App extends Component {
  // Setting this.state.bands to the friends json array
  state = {
    bands
  };

  removeBand = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const bands = this.state.bands.filter(band => band.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ bands });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Bands List</Title>
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
      </Wrapper>
    );
  }
}

export default App;
