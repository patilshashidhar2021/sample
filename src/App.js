import './App.css';
import FetchApi from './components/FetchApi';
// import InputFields from './components/InputFields';
// import {  useState} from "react";
import Map from './components/Map';
import WithAPI from './components/WithAPI';
// import DataTable from "./components/DataTable";


function App() {

  

  return (
    <div className="App">
      
      <div>
        {/* <Map/> */}
        <WithAPI/>
      </div>
      <div>
        

        <FetchApi/>
      </div>
    </div>
  );
}

export default App;
