/* TerminalContainer.js */
import React from 'react';
import { ParallaxLayer } from '@react-spring/parallax';

const TerminalContainer = ({ title, date, header, content }) => {
  return (
    <ParallaxLayer offset={1} speed={0.5} style={{ zIndex: 2 }}>
      <div className="terminal-container">
        <div className="terminal-header">
          <div className="terminal-title">{title}</div>
          <div className="terminal-date">{date}</div>
          <div className="terminal-prompt">{header}</div>
        </div>
        <div className="terminal-content">
          {content}
        </div>
      </div>
    </ParallaxLayer>
  );
};

export default TerminalContainer;
