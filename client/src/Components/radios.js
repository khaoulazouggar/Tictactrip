import React from "react";

export default function Radios() {
  return (
    <div>
      <div className="radios">
        <div className="radio">
          <input type="radio" name="radio" />
          <span>One Way</span>
        </div>
        <div className="radio">
          <input type="radio" name="radio" />
          <span>Return</span>
        </div>
        <div className="radio">
          <input type="radio" name="radio" />
          <span>Open Return</span>
        </div>
        <div className="radio">
          <input type="radio" name="radio" />
          <span>Seasons</span>
        </div>
      </div>
    </div>
  );
}
