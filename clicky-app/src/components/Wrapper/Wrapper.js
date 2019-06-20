import React from "react";
import "./Wrapper.css";

render()
return (
    <Wrapper>
        <Header score={this.state.score} highscore={this.state.highscore}> Clicky</Header>
        {this.state.BandCard.map(BandCard => (
            <BandCard
                clickCount={this.clickCount}
                id={BandCard.id}
                key={BandCard.id}
                image={BandCard.image} />
        ))}
    </Wrapper>
)




export default Wrapper;