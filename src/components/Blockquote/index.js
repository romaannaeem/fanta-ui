import React from 'react';
import './Blockquote.css';

export default function index(props) {
  return (
    <div className="blockquote-container" style={props.style}>
      <blockquote
        class={`blockquote ${props.right ? 'text-right' : ''} ${
          props.center ? 'text-center' : ''
        }`}
        style={props.style}
      >
        {props.quote ? props.quote : null}
        {props.source ? (
          <footer class="blockquote-footer">
            <cite title="Source Title">{props.source}</cite>
          </footer>
        ) : null}
        {props.children}
      </blockquote>
    </div>
  );
}
