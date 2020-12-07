import React from 'react';
import './ButtonGroup.css';

export default function index(props) {
  return (
    <div class="btn-group" role="group">
      {props.children}
    </div>
  );
}
