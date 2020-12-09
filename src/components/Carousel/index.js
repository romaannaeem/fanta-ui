import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import './Carousel.css';

export default function Carousel(props) {
  const [id, setId] = useState('');
  console.log(props.children); // need to count to figure out how many indicatorNavs to add

  useEffect(() => {
    function generateUniqueId(prefix) {
      let unique = _.uniqueId(prefix);
      setId(unique);
      return unique;
    }

    generateUniqueId('carousel-');
  }, []);

  return (
    <div
      id={`${id}`}
      className="carousel slide"
      data-ride="carousel"
      style={props.style}
    >
      {props.indicatorNavigation ? (
        <ol class="carousel-indicators">
          {props.children.map((child, index) => {
            return (
              <li
                data-target={`#${id}`}
                data-slide-to={`${index}`}
                className={id === 0 ? 'active' : ''}
              ></li>
            );
          })}
        </ol>
      ) : null}
      <div className="carousel-inner">{props.children}</div>
      {props.arrowNavigation ? (
        <>
          <a
            className="carousel-control-prev"
            href={`#${id}`}
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href={`#${id}`}
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </>
      ) : null}
    </div>
  );
}
