import React from 'react';
import './Table.css';

export default function Table(props) {
  return (
    <table className="table" style={props.style}>
      {props.children}
    </table>
  );
}
