import React from "react";
import Button from "./Button";

function Starting() {
  return (
    <div>
      <form className="form">
        <div className="button">
          <Button name="Login" />
        </div>
        <div className="button">
          <Button name="Signup" />
        </div>
      </form>
    </div>
  );
}

export default Starting;
