import React, { Component } from 'react';
import './Hangman.css';
import { randomWord } from './Word.js';

import step0 from  './images/0.jpg';
import step1 from  './images/1.jpg';
import step2 from  './images/2.jpg';
import step3 from  './images/3.jpg';
import step4 from  './images/4.jpg';
import step5 from  './images/5.jpg';
import step6 from  './images/6.jpg';



class Hangman extends Component {
    static defaultProps = {
    maxWrong: 6,
    images: [ step0, step1, step2, step3, step4, step5, step6 ]
  }

  constructor(props) {
    super(props);
    this.state = {
      mistake: 0,
      guessed: new Set([]),
      answer: randomWord()
    }
  }

  guessedWord(){
    return this.state.answer.split("").map(letter => (this.state.guessed.has.letter ? letter : "_" ));
  }

  generateButtons(){
    return "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map( letter => (
      <button>
        {letter}
      </button>
    ));
  }

  render () {
    const gameOver = this.state.mistake >= this.props.maxWrong;
    let gameStat = this.generateButtons();

    return (
      <div className="Hangman container" >
      <h1 className="text-center"> Hangman </h1>
      <div className="float-right">Wrong guesses: {this.state.mistake} of {this.props.maxWrong}</div>
      <div className="text-center">
        <img src={this.props.images[this.state.mistake]} alt=""/>
        </div>
      <div className="text-center">
      <p>Guess The Programming Language:</p>
      <p>
      {!gameOver ? this.guessedWord() : this.state.answer }
      </p>
      <p>{gameStat }
            </p>
      </div>
    </div>
    )
  }
}




export default Hangman;
