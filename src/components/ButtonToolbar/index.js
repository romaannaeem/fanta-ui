import React from 'react';
import './ButtonToolbar.css';

export default function index(props) {
  return <div className="btn-toolbar">{props.children}</div>;
}