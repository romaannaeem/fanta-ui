import React from 'react';
import './Alert.css';

export default function Alert(props) {
  return (
    <div class={`alert alert-${props.type}`} style={props.style} role="alert">
      {props.children}
    </div>
  );
}
