import React from 'react';
import './BreadcrumbItem.css';

export default function index(props) {
  return (
    <li
      class={`breadcrumb-item ${props.active ? 'active' : ''}`}
      aria-current="page"
    >
      <a href={`${props.url ? props.url : '#'}`}>{props.children}</a>
    </li>
  );
}
