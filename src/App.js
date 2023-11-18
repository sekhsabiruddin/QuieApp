import { useState } from "react";
import React from "react";

function App() {
  const [apidata, SetApidata] = useState([]);
  const [tracker, Settraker] = useState(0);
  const APIURL = "https://jsonplaceholder.typicode.com/users";

  const getData = async () => {
    const reposnese = await fetch(APIURL);
    const data = await reposnese.json();
    SetApidata(data);
  };
  const sortTheData = () => {
    if (tracker == 0 || tracker == 2) {
      SetApidata([...apidata].sort((a, b) => a.name.length - b.name.length));
      Settraker(1);
    } else {
      SetApidata([...apidata].sort((a, b) => b.name.length - a.name.length));
      Settraker(2);
    }
  };
  return (
    <div>
      <button onClick={(e) => getData()}>Get Data</button>
      <button onClick={sortTheData}>Sort Data</button>
      {apidata && apidata.map((ele, i) => <li key={i}>{ele.name}</li>)}
    </div>
  );
}

export default App;
