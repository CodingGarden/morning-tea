import React, { Component } from 'react'; // import from react

import { render, Window, App, Box, Dialog, Text, TextInput, Button } from 'proton-native'; // import the proton-native components

class Example extends Component {
  constructor() {
    super();
    this.state = {
      name: ''
    };
  }
  setName(name) {
    this.setState({
      name
    });
  }
  sayName() {
    Dialog('Error', {
      title: "Message",
      description: `Hello ${this.state.name}!`
    });
  }
  render() { // all Components must have a render method
    return (
      <App> // you must always include App around everything
        <Window title="Proton Native Rocks!" size={{w: 300, h: 300}} menuBar={false}>
          <Box>
            <Text>Enter your name:</Text>
            <TextInput onChange={(value) => this.setName(value)} />
            <Button onClick={() => this.sayName()}>Say Hello!</Button>
          </Box>
        </Window>
      </App>
    );
  }
}

render(<Example />); // and finally render your main component
