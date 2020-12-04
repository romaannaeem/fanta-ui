import React from 'react';
import './Alert.css';

export default function Alert(props) {
  switch (props.type) {
    case 'primary':
      return (
        <div class="alert alert-primary" role="alert">
          {props.children}
        </div>
      );

    case 'secondary':
      return (
        <div class="alert alert-secondary" role="alert">
          {props.children}
        </div>
      );

    case 'success':
      return (
        <div class="alert alert-success" role="alert">
          {props.children}
        </div>
      );

    case 'danger':
      return (
        <div class="alert alert-danger" role="alert">
          {props.children}
        </div>
      );

    case 'warning':
      return (
        <div class="alert alert-warning" role="alert">
          {props.children}
        </div>
      );

    case 'info':
      return (
        <div class="alert alert-info" role="alert">
          {props.children}
        </div>
      );

    case 'light':
      return (
        <div class="alert alert-light" role="alert">
          {props.children}
        </div>
      );

    case 'dark':
      return (
        <div class="alert alert-dark" role="alert">
          {props.children}
        </div>
      );
  }
}
