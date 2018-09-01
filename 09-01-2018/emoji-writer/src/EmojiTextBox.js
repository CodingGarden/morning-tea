import React, { Component } from 'react';
import EmojiContext from './EmojiContext';

class EmojiTextBox extends Component {
  state = {
    text: 'Hello World!'
  };

  textChanged = (e) => {
    this.setState({
      text: e.target.value
    });
  }

  keyUp = (e, data) => {
    if (e.keyCode === 32) {
      this.emojify(data);
    }
  }

  emojify = (data) => {    
    const replaceLine = (text) => text.split(' ').map(word => {
      if (!word) return '';
      const emojis = data.emojis[word.toLowerCase()];
      return emojis?.[Math.floor(Math.random() * emojis.length)] || word;
    }).join(' ');
    const emojifiedText = this.state.text.split('\n').map(replaceLine).join('\n');
    this.setState({
      text: emojifiedText
    });
  }

  render() {
    return (
      <EmojiContext.Consumer>
        {data => (
          <textarea
            {...this.props}
            className="emoji-text"
            rows="10"
            cols="40"
            onChange={this.textChanged}
            onKeyUp={(e) => this.keyUp(e, data)}
            value={this.state.text}></textarea>
        )}
      </EmojiContext.Consumer>
    );
  }
}

export default EmojiTextBox;
