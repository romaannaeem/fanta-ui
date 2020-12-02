import React from 'react';
import './Typography.css';

// props:
// color
// level

export default function Typography(props) {
  switch (props.level) {
    case 1:
      return <h1 style={{ color: props.color }}>Typography</h1>;

    case 2:
      return <h2 style={{ color: props.color }}>Typography</h2>;

    case 3:
      return <h3 style={{ color: props.color }}>Typography</h3>;

    case 4:
      return <h4 style={{ color: props.color }}>Typography</h4>;

    case 5:
      return <h5 style={{ color: props.color }}>Typography</h5>;

    case 6:
      return <h6 style={{ color: props.color }}>Typography</h6>;
    default:
      return <h1 style={{ color: props.color }}>Typography</h1>;
  }
}
