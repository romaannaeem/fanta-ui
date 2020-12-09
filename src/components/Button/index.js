import React from 'react';
import './Button.css';

export default function Button(props) {
  return (
    <button type="button" class={`btn btn-${props.type}`} style={props.style}>
      {props.children}
    </button>
  );
}
