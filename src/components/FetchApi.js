import React, { useState, useEffect } from "react";

function FetchApi() {
  const [type, setType] = useState([]);
  const [error, setError] = useState(null);

  //   useEffect(() => {
  //     console.log("in use effect");
  //     fetch("http://192.168.0.131:5000/value-types")
  //       .then((response) => response.json())
  //       .then((jsonData) => {
  //         console.log("jason--", jsonData);
  //         setType(jsonData);
  //         setType([]);
  //       });
  //     console.log(type);
  //   }, []);

  const fetchValueTypes = () => {
    fetch("http://192.168.0.131:5000/value-types")
      .then((response) => response.json())
      .then((jsonData) => {
        console.log("jsonData", jsonData);  
        setType(jsonData);
      })
      .catch((error) => {
        setError(error);
      });
  };

  return (
    <div>
      {error && <div style={{ color: "red" }}>error</div>}
      <div
        onClick={fetchValueTypes}
        style={{
          padding: 10,
          backgroundColor: "#a4a4a4",
          borderRadius: "10px",
        }}
      >
        My API <br />
        {/* <button onClick={api}>Fetch API</button> */}
      </div>
    </div>
  );
}

export default FetchApi;
