import React from "react";

export default function Return(props) {
  const numbers = [
    "00",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
  ];
  return (
    <div className="return" style={{display: props.data.radioState === 4 ?  "none" :"block"}}>
      <div className="return_span">
        <span>Return</span>
      </div>
      <div className="day_div">
        <span className="day">Same day</span>
        <span className="day">Next day</span>
      </div>
      <input className="inpt inpt1" type="text" placeholder="Enter..."/>
      <select className="inpt inpt1">
        <option value="departAfter">
          Leaving at
        </option>
        <option value="arriveBefore">Arriving by</option>
      </select>
      <div className="inline_div">
        <div className="in_inline_div">
          <select className="inpt inpt1">
            {numbers.map((number, key) => (
              <option value={number} key={key}>
                {number}
              </option>
            ))}
          </select>
        </div>
        <div className="in_inline_div">
          <select className="inpt inpt1">
            <option value="00">00</option>
            <option value="15">15</option>
            <option value="30">30</option>
            <option value="45">45</option>
          </select>
        </div>
      </div>
      <div className="disable_return" onClick={()=>{props.data.setradioState(2)}} style={props.data.radioState !== 2 ? {display:"block"}: {display:"none"}}></div>
    </div>
  );
}
