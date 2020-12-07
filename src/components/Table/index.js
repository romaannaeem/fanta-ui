import React from 'react';
import './Table.css';

export default function Table(props) {
  return (
    <table class="table" style={props.style}>
      {props.children}
    </table>
  );
}
