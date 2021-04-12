import React, { useState } from "react";
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

export default function Out(props) {
  const [date, setdate] = useState(new Date());
  return (
    <div className="out" style={{ display: props.data.radioState === 4 ? "none" : "block" }}>
      <div className="out_span">
        <span>Out</span>
      </div>
      <div className="day_div">
        <span className="day">Today</span>
        <span className="day">Tomorrow</span>
      </div>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          className="inpt inpt1 inptdate"
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker"
          // label="Date picker inline"
          value={date}
          onChange={(dt) => {
            setdate(dt);
          }}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
        />
      </MuiPickersUtilsProvider>
      <select className="inpt inpt1">
        <option value="departAfter">Leaving at</option>
        <option value="arriveBefore">Arriving by</option>
      </select>
      <div className="inline_div">
        <div className="in_inline_div">
          <select className="inpt inpt1" defaultValue="15">
            <option value="00">00</option>
            <option value="01">01</option>
            <option value="02">02</option>
            <option value="03">03</option>
            <option value="04">04</option>
            <option value="05">05</option>
            <option value="06">06</option>
            <option value="07">07</option>
            <option value="08">08</option>
            <option value="09">09</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
          </select>
        </div>
        <div className="in_inline_div">
          <select className="inpt inpt1" defaultValue="45">
            <option value="00">00</option>
            <option value="15">15</option>
            <option value="30">30</option>
            <option value="45">45</option>
          </select>
        </div>
      </div>
    </div>
  );
}
