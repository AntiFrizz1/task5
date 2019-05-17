import React, { Component } from 'react';

import './letters.css';
import '../page/page.css';
import { LetterHead } from '../letterHead/letterHead';

export class Letters extends Component {
  getClassName = () => {
    return this.props.display ? 'letters' : 'letters letters_hidden';
  };

  render() {
    return (
      <ul className={this.getClassName()}>
        {this.props.letters.map(letter => {
          if (letter.isVisible) {
            return (
              <LetterHead
                {...letter}
                key={letter.id}
                isChecked={this.props.checked[letter.id]}
                checkboxChange={this.props.checkboxChange}
                setText={this.props.setText}
                removeAddAnimation={this.props.removeAddAnimation}
                setRead={this.props.setRead}
                showLetter={this.props.showLetter}
              />
            );
          }
        })}
      </ul>
    );
  }
}
