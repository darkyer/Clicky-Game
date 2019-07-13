import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Result from "./components/Result";
import Card from "./components/Card";
import Score from "./components/Score";
import Nav from "./components/Nav";
// import './App.css';
const initialState = {
  score: 0,
  cards: [
    {
      imageUrl: "./images/1.jpg",
      clicked: false
    },
    {
      imageUrl: "./images/2.jpg",
      clicked: false
    },
    {
      imageUrl: "./images/3.jpg",
      clicked: false
    },
    {
      imageUrl: "./images/4.jpg",
      clicked: false
    },
    {
      imageUrl: "./images/5.jpg",
      clicked: false
    },
    {
      imageUrl: "./images/6.jpg",
      clicked: false
    },
    {
      imageUrl: "./images/7.jpg",
      clicked: false
    },
    {
      imageUrl: "./images/8.jpg",
      clicked: false
    },
    {
      imageUrl: "./images/9.jpg",
      clicked: false
    }
  ]
};

let resultText = "Click all the images without repiting them";

class App extends Component {

  state = {
    score: 0,
    cards: [
      {
        imageUrl: "./images/1.jpg",
        clicked: false
      },
      {
        imageUrl: "./images/2.jpg",
        clicked: false
      },
      {
        imageUrl: "./images/3.jpg",
        clicked: false
      },
      {
        imageUrl: "./images/4.jpg",
        clicked: false
      },
      {
        imageUrl: "./images/5.jpg",
        clicked: false
      },
      {
        imageUrl: "./images/6.jpg",
        clicked: false
      },
      {
        imageUrl: "./images/7.jpg",
        clicked: false
      },
      {
        imageUrl: "./images/8.jpg",
        clicked: false
      },
      {
        imageUrl: "./images/9.jpg",
        clicked: false
      }
    ]
  };

  clickImage = id => {
    console.log("button pressed: " + id);
    let newCards = this.state.cards.slice();
    if (newCards[id].clicked === false) {
      newCards[id] = {
        imageUrl: this.state.cards[id].imageUrl,
        clicked: true
      }
      newCards = this.shuffleCards(newCards);
      resultText = "Correct!";
      this.setState({ cards: newCards, score: this.state.score + 1 });
    } else {
      this.resetScore();
    }
  }

  resetScore = () => {
    console.log("reseting score***");
    resultText = "Wrong, you need to start over";
    let resetState = initialState;
    resetState.cards = this.shuffleCards(resetState.cards);
    this.setState(resetState);
  }

  increaseScore = () => {
    this.setState({ score: this.state.score + 1 });
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
    let ctr = arra1.length, temp, index;

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
      <div>
        <Nav>
          <Title>Click Game - Dog Edition</Title>
          </Nav>
          <Wrapper>
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-12 m-1">
              <Result>{resultText}</Result>
                <Score
                  score={this.state.score}
                />
              </div>
            </div>
            <div className="row">
              {this.state.cards.map((result, i) => (
                <Card
                  key={i}
                  clicked={result.clicked}
                  id={i}
                  imageUrl={result.imageUrl}
                  clickImage={this.clickImage}
                />
              ))}
            </div>
          </Wrapper>
        </div>
        );
      }
    
    }
    
    export default App;
