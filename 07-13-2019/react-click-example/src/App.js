import React from 'react';
import ExpansionPanel from './components/ExpansionPanel';

function App() {
  return (
    <div>
      <ExpansionPanel title="Click me!">
        <h3>You should only see me if you clicked above! 👀</h3>
      </ExpansionPanel>
      <ExpansionPanel title="Click me!">
        <h3>You should only see me if you clicked above! 👀</h3>
      </ExpansionPanel>
      <ExpansionPanel title="Click me!">
        <h3>You should only see me if you clicked above! 👀</h3>
      </ExpansionPanel>
      <ExpansionPanel title="Click me!">
        <h3>You should only see me if you clicked above! 👀</h3>
      </ExpansionPanel>
      <ExpansionPanel title="Click me!">
        <h3>You should only see me if you clicked above! 👀</h3>
      </ExpansionPanel>
    </div>
  );
}

export default App;
