import React from 'react';
import './Card.css';

// ? Subcomponents Needed
// ? Allow users to build the card using custom components where needed, but provide a generic Card component that can be used in MOST scenarios by maximizing use of props

// TODO: CardBody -  Component (Wrapper for props.children)

// * CardImage - Prop / Component (alt)

// TODO: CardHeader - Prop (Generic Header) / Component (h1 - h6)

// * CardTitle - Prop
// TODO: CardTitle - Component (h1 - h6)

// * CardSubtitle - Prop (Generic h6 title)
// TODO: CardSubtitle - Component (h1 - h6)

// * CardText - Prop (generic p element)

// TODO: CardLink - Component (href element)

// * CardFooter - Prop (generic card-footer div)
// TODO: CardFooter - Component (div wrapper for props.children)

// ! Ensure ListGroups work with this component

export default function Card(props) {
  return (
    <div className="card" style={props.style}>
      <img src={`${props.imageUrl}`} class="card-img-top" />
      <div className="card-body">
        {props.title ? <h5 className="card-title">{props.title}</h5> : null}
        {props.subtitle ? (
          <h6 className="card-subtitle mb-2 text-muted"> {props.subtitle} </h6>
        ) : null}
        {props.text ? <p className="card-text"> {props.text} </p> : null}
        {props.children}
        {props.footer ? <div class="card-footer">{props.footer}</div> : null}
      </div>
    </div>
  );
}
