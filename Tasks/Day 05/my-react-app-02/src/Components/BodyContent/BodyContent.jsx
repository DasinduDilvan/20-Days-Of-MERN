import React from "react";
import './BodyContent.css';

function BodyContent(props) {
  return (
    <div className="card-container">
      {props.children}
    </div>
  );
}

function CardSet(props) {
  return (
    <div className="card">
            {props.children}
    </div>
  );
}

export { CardSet, BodyContent };