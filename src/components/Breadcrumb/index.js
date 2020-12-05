import React from 'react';
import './Breadcrumb.css';

export default function index(props) {
  return (
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">{props.children}</ol>
    </nav>
  );
}
