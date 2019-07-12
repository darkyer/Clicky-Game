import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Card from "./components/Card";
import Score from "./components/Score";
// import './App.css';


class App extends Component {

  state = {
    score: 0,
    cards: [
      {
        id: 0,
        imageUrl: "./images/1.jpg",
        clicked: false
      },
      {
        id: 1,
        imageUrl: "./images/2.jpg",
        clicked: false
      },
      {
        id: 2,
        imageUrl: "./images/3.jpg",
        clicked: false
      },
      {
        id: 3,
        imageUrl: "./images/4.jpg",
        clicked: false
      }
    ]
  };

  clickImage = id => {
    console.log("button pressed: " + id);
    var newCards = this.state.cards.slice();
    if (newCards[id].clicked === false) {
      newCards[id] = {
        id: this.state.cards[id].id,
        imageUrl: this.state.cards[id].imageUrl,
        clicked: true
      }
      newCards = this.shuffleCards(newCards);
      this.setState({ cards: newCards, score: this.state.score + 1 });
    } else {
      this.resetScore();
    }
  }

  resetScore = () => {
    console.log("reseting score");
    this.setState({ score: 0 });
  }

  increaseScore = () => {
    this.setState({score: this.state.score + 1});
  }

  printArray = () => {
    console.log("--------------");
    console.table(this.state.cards);
    console.log("--------------");
  }

  shuffleCards = newcards => {
    const shuffledCards = this.shuffle(newcards)
    return shuffledCards;
  }

  shuffle = (arra1) => {
    var ctr = arra1.length, temp, index;

    while (ctr > 0) {
      index = Math.floor(Math.random() * ctr);
      ctr--;
      temp = arra1[ctr];
      arra1[ctr] = arra1[index];
      arra1[index] = temp;
    }

    return arra1;
  }

  render() {
    return (
      <Wrapper>
        <button onClick={() => this.printArray()}>print array</button>
        <Title>Cards List</Title>

        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 m-1">
            <Score
              score={this.state.score}
            />
          </div>
        </div>
        <div className="row">
          {this.state.cards.map(result => (
            <Card
              key={result.id}
              clicked={result.clicked}
              id={result.id}
              imageUrl={result.imageUrl}
              clickImage={this.clickImage}
            />
          ))}
        </div>
      </Wrapper>
    );
  }

}

export default App;
