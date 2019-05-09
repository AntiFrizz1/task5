import React, { Component } from 'react';

import './letterHead.css';
import '../page/page.css';

export class LetterHead extends Component {
  constructor(props) {
    super(props);

    this.makeClassName = this.makeClassName.bind(this);
  }

  makeClassName() {
    const className = ['letter-head'];
    if (this.props.addAnimation) {
      className.push('letter-head__animated-add-line');
      setTimeout(() => {
        this.props.removeAddAnimation(this.props.id);
      }, 1500);
    }
    if (this.props.deleteAnimation) {
      className.push('letter-head__animated-delete-line');
      setTimeout(() => {
        this.props.makeDelete(this.props.id);
      }, 1500);
    }

    return className.join(' ');
  }

  render() {
    return (
      <li
        id={this.props.id}
        className={this.makeClassName()}
        key={this.props.id}
        style={{ display: this.props.isVisible ? 'inline' : 'none' }}
      >
        <label htmlFor="letter-id-1-checkbox">
          <input
            id="letter-id-1-checkbox"
            className="page__my-input letter-head__my-checkbox"
            type="checkbox"
            checked={this.props.isChecked}
            onChange={() => this.props.checkboxChange(this.props.id)}
          />
        </label>
        <a
          href="#"
          className={
            this.props.unread ? 'letter-head__link letter-head_unread' : 'letter-head__link'
          }
          onClick={() => {
            this.props.setText(this.props.text);
            this.props.showLetter();
            this.props.setRead(this.props.id);
          }}
        >
          <img
            className="letter-head__author-image"
            src={this.props.authorImage}
            alt="author logo"
          />
          <div className="letter-head__author-name">
            <p className="page__my-text">{this.props.authorName}</p>
          </div>
          <div className="letter-head__read" />
          <div className="letter-head__text">
            <p className="page__my-text">{this.props.headText}</p>
          </div>
          <div className="letter-head__date">
            <time dateTime={this.props.headTagDate}>
              <p>{this.props.headDate}</p>
            </time>
          </div>
        </a>
        <div className="page__line" />
      </li>
    );
  }
}