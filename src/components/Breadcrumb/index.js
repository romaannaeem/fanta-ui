import React from 'react';
import './Breadcrumb.css';

export default function Breadcrumb(props) {
  return (
    <nav aria-label="breadcrumb" style={props.style}>
      <ol class="breadcrumb">{props.children}</ol>
    </nav>
  );
}
