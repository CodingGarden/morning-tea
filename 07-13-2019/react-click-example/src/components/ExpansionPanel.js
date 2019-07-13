import React, { useState } from 'react';
import injectSheet from 'react-jss';

const styles = {
  container: {
    margin: '10px',
    outline: '2px solid grey',
    transition: 'all 1s linear',
  },
  title: {
    fontSize: '1.5em',
    cursor: 'pointer',
    padding: '0.5em',
  },
  arrow: {
    float: 'right',
  },
  children: {
    padding: '0.5em',
  }
};

const ExpansionPanel = ({ title, children, classes }) => {
  const [isExpanded, setExpanded] = useState(false);
  return (
    <div className={classes.container}>
      <div className={classes.title} onClick={() => setExpanded(!isExpanded)}>
        {title}
        <span className={classes.arrow}>
          {
            isExpanded ? '🔼' : '🔽'
          }
        </span>
      </div>
      {
        isExpanded ? (
          <div className={classes.children}>{children}</div>
        ) : null
      }
    </div>
  );
};

export default injectSheet(styles)(ExpansionPanel);
