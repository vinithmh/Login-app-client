import React from "react";

function Button(props) {
  return (
    <div className="buttonContainer">
      <button className="buttonstyle" type="submit">
        {props.name}
      </button>
    </div>
  );
}

export default Button;
