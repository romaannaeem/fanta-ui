import React from 'react';
import './Badge.css';

export default function Badge(props) {
  return (
    <span class={`badge badge-${props.type} ${props.pill ? 'badge-pill' : ''}`}>
      {props.children}
    </span>
  );
}
