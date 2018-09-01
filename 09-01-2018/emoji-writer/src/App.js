import React, { Component } from 'react';
import emojiJson from 'emoji.json/emoji.json';
import './App.css';
import EmojiContext from './EmojiContext';
import EmojiTextBox from './EmojiTextBox';

const emojis = emojiJson.reduce((emojis, emoji) => {
  emoji.keywords.split('|').map(keyword => {
    emojis[keyword.trim()] = emojis[keyword.trim()] || [];
    emojis[keyword.trim()].push(emoji.char);
  });
  return emojis;
}, {});

class App extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <h1>Hello Emojis! 👋</h1>
        <EmojiContext.Provider value={{
          emojis
        }}>
          <EmojiTextBox />
        </EmojiContext.Provider>
      </div>
    );
  }
}

export default App;
