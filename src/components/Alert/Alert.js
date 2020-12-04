import React from 'react';
import './Alert.css';

export default function Alert(props) {
  return (
    <div class={`alert alert-${props.type}`} role="alert">
      {props.children}
    </div>
  );
}
