import React from 'react';
import './ButtonGroup.css';

export default function ButtonGroup(props) {
  return (
    <div class="btn-group" role="group" style={props.style}>
      {props.children}
    </div>
  );
}
