import React, { Component } from "react";
import Image from "./Image";
import Jumbotron from "./Jumbotron";
import Container from "./Container";
import data from "../data.json";

class Game extends Component {
    state = {
        data,
        score: 0,
        topScore: 0
    };

    //shuffle function to randomize images found on Stack Overflow //https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
    shuffleArray = data => {
        for (let i = data.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [data[i], data[j]] = [data[j], data[i]];
        }
        return data;
    };

    //when loaded shuffle data
    componentDidMount() {
        this.setState({ data: this.shuffleArray(this.state.data) });
    };

    handleClick = id => {
        let madeGuess = false;
        //create the map of the data to check which image is clicked
        const newData = this.state.data.map(item => {
            const newItem = { ...item };
            if (newItem.id === id) {
                if (!newItem.clicked) {
                    newItem.clicked = true;
                    madeGuess = true;
                }
            }
            return newItem;
        });
        madeGuess
            //if good guess
            ? this.goodGuess(newData)
            //else bad guess
            : this.badGuess(newData);
    };



    resetGame = data => {
        const resetData = data.map(item => ({ ...item, clicked: false }));
        return this.shuffleArray(resetData);
    };

    goodGuess = newData => {
        const { score, topScore } = this.state
        let newScore = score + 1;
        // condition (newscore > topscore) if true newTopScore = newScore else newTopScore = topScore
        let newTopScore = (newScore > topScore) ? newScore : topScore;
        if (newScore === 12) {
            alert("You did it!")
            this.setState({
                data: this.shuffleArray(newData),
                score: 0,
                topScore: newTopScore
            })
        } else {
            this.setState({
                data: this.shuffleArray(newData),
                score: newScore,
                topScore: newTopScore
            })
        }

    }

    badGuess = data => {
        // changes state so score is 0 and reshuffles images
        this.setState({
            data: this.resetGame(data),
            score: 0
        });
    }

    render() {
        return (
            <div>
                <Jumbotron
                    score={this.state.score}
                    topScore={this.state.topScore}
                />
                <Container>
                    {this.state.data.map(item => (
                        <Image
                            key={item.id}
                            id={item.id}
                            handleClick={this.handleClick}
                            image={item.image}
                        />
                    ))}
                </Container>
            </div>
        )
    }

}

export default Game;