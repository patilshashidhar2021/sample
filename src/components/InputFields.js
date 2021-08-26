import React from "react";
import "./InputFields.css";

function InputFields(props) {
  // console.log(props);
  const onChangeHandler = (e) => {
    e.preventDefault();
    props.onCompanyChange("company", e.target.value);
    props.onDateChange("date", e.target.value);
    props.onStartTimeChange("startTime", e.target.value);
    props.onEndTimeChange("endTime", e.target.value);
    props.onSelectTypeChange("selectType", e.target.value);
    props.onFrequencyChange("frequency", e.target.value);
  };

  return (
    <div className="whole">
      <div className="select-company">
        <label>Company</label>
        <select
          className="company-select"
          value={props.company}
          onChange={onChangeHandler}
        >
          <option type="text" value={"none"}>
            None
          </option>
          <option type="text" value={"ITC"}>
            ITC
          </option>
          <option type="text" value={"NESTLEIN"}>
            Nestle India
          </option>
          <option type="text" value={"PVR"}>
            PVR
          </option>
          <option type="text" value={"SBIN"}>
            SBI
          </option>
          <option type="text" value={"TCS"}>
            TCS
          </option>
        </select>
      </div>
      <div>
        <label>Date</label>
        <input type="date" value={props.date} onChange={onChangeHandler} />
      </div>
      <div>
        <label>Start Time</label>
        <input type="time" value={props.startTime} onChange={onChangeHandler} />
      </div>
      <div>
        <label>End Time</label>
        <input type="time" value={props.endTime} onChange={onChangeHandler} />
      </div>
      <div className="select-type">
        <label>Type</label>
        <select
          type="text"
          className="type-select"
          value={props.selectType}
          onChange={onChangeHandler}
        >
          <option type="text" value={"none"}>
            None
          </option>
          <option type="text" value={"open"}>
            Open
          </option>
          <option type="text" value={"high"}>
            High
          </option>
          <option type="text" value={"low"}>
            Low
          </option>
          <option type="text" value={"lose"}>
            Close
          </option>
        </select>
      </div>
      <div>
        <label>Frequency</label>
        <select
          type="number"
          className="frequency-select"
          value={props.frequency}
          onChange={onChangeHandler}
        >
          <option type="text" value={0}>
            None
          </option>
          <option type="number" vlue={1}>
            1 min
          </option>
          <option type="number" value={5}>
            5 min
          </option>
          <option type="number" value={10}>
            10 min
          </option>
          <option type="number" value={15}>
            15 min
          </option>
          <option type="number" value={30}>
            30 min
          </option>
          <option type="number" value={60}>
            1 hour
          </option>
          <option type="number" value={120}>
            2 hour
          </option>
        </select>
      </div>
      {/* <div>
      <button type='submit' onSubmit={onSubmitHandler}>Get Data</button>
      </div> */}
    </div>
  );
}

export default InputFields;
