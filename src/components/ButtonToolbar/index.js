import React from 'react';
import './ButtonToolbar.css';

export default function ButtonToolbar(props) {
  return (
    <div className="btn-toolbar" style={props.style}>
      {props.children}
    </div>
  );
}
