import React from "react";
import { Link } from "react-router";

const Main = props => {
  return (
    <div>
      <Link to="/">
        <h1>Reduxstagram</h1>
      </Link>
      {React.cloneElement(props.children, props)}
    </div>
  );
};

export default Main;
