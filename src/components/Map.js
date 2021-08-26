import React, { useState } from "react";
import "./Map.css";
import DataTable from "./DataTable";

function Map() {
  const companies = [
    { name: "", value: "" },
    { name: "ITC", value: "ITC" },
    { name: "Nestle India", value: "NESTLEIND" },
    { name: "PVR", value: "PVR" },
    { name: "SBI", value: "SBIN" },
    { name: "TCS", value: "TCS" },
  ];
  const selectTypes = [
    { name: "", value: "" },
    { name: "Open", value: "open" },
    { name: "High", value: "high" },
    { name: "Low", value: "low" },
    { name: "Close", value: "close" },
    { name: "All", value: "all" },
  ];

  const frequencies = [
    { name: "", value: "" },
    { name: "1 min", value: 1 },
    { name: "2 min", value: 2 },
    { name: "5 min", value: 5 },
    { name: "10 min", value: 10 },
    { name: "15 min", value: 15 },
    { name: "30 min", value: 30 },
    { name: "1 hour", value: 60 },
    { name: "2 hour", value: 120 },
    { name: "3 hour", value: 180 },
  ];

  const companyList = companies.map((company, index) => (
    <option key={index} value={company.value}>
      {company.name}
    </option>
  ));

  const selectTypeList = selectTypes.map((selectType, index) => (
    <option key={index} value={selectType.value}>
      {selectType.name}
    </option>
  ));

  const frequencyList = frequencies.map((frequency, index) => (
    <option key={index} value={frequency.value}>
      {frequency.name}
    </option>
  ));

  const [allState, setAllState] = useState({
    company: "",
    date: "",
    startTime: "",
    endTime: "",
    selectType: "",
    frequency: "",
  });

  const [data, setData] = useState([]);
  const inputHandeler = (event) => {
    const { value, name } = event.target;
    setAllState((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (allState.startTime > allState.endTime) {
      alert("Start time is greater than End time");
      return;
    }

    setData([allState]);
  };

  const clearTable = (e) => {
    setData("");
    setAllState({
      company: "",
      date: "",
      startTime: "",
      endTime: "",
      selectType: "",
      frequency: "",
    });
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="fullMap">
        <div>
          <label variant="standard">Company</label>
          <select
            className="select-company"
            name="company"
            value={allState.company}
            defaultValue="company"
            onChange={inputHandeler}
            required
          >
            {companyList}
          </select>
        </div>
        <div>
          <label>Date</label>
          <input
            type="date"
            name="date"
            className="select-date"
            value={allState.date}
            onChange={inputHandeler}
            required
          />
        </div>
        <div>
          <label>Start Time</label>
          <input
            type="time"
            name="startTime"
            className="select-starttime"
            value={allState.startTime}
            onChange={inputHandeler}
            required
          />
        </div>
        <div>
          <label>End Time</label>
          <input
            type="time"
            name="endTime"
            className="select-endtime"
            value={allState.endTime}
            onChange={inputHandeler}
            required
          />
        </div>
        <div>
          <label>Type</label>
          <select
            className="select-type"
            name="selectType"
            value={allState.selectType}
            onChange={inputHandeler}
            required
          >
            {selectTypeList}
          </select>
        </div>
        <div>
          <label>Frequency in Minute</label>
          <select
            className="select-frequency"
            name="frequency"
            value={allState.frequency}
            onChange={inputHandeler}
            required
          >
            {frequencyList}
          </select>
        </div>
        <div>
          <button type="submit">Get Data</button>
        </div>
        <div>
          <button type="button" onClick={clearTable}>
            Clear Data
          </button>
        </div>
        <div>{data && data.length ? <DataTable data={data} /> : ""}</div>
      </div>
    </form>
  );
}

export default Map;
