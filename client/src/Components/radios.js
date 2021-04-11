import React from "react";

export default function Radios(props) {
  return (
    <div>
      <div className="radios">
        <div className="radio">
          <input type="radio" name="radio" onClick={()=>{props.data.setradioState(1)}}  defaultChecked={props.data.radioState === 1 ? true : false}/>
          <span>One Way</span>
        </div>
        <div className="radio">
          <input type="radio" name="radio" onChange={()=>{props.data.setradioState(2)}} checked={props.data.radioState === 2 ? true : false}/>
          <span>Return</span>
        </div>
        <div className="radio">
          <input type="radio" name="radio" onClick={()=>{props.data.setradioState(1)}}/>
          <span>Open Return</span>
        </div>
        <div className="radio">
          <input type="radio" name="radio" onClick={()=>{props.data.setradioState(4)}}/>
          <span>Seasons</span>
        </div>
      </div>
    </div>
  );
}
