import React from 'react';

export default function Jumbotron(props) {
  return (
    <div className={`jumbotron ${props.fluid ? 'jumbotron-fluid' : ''}`}>
      {props.children}
    </div>
  );
}
