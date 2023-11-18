import React, { useEffect, useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [apidata, setApidata] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://disease.sh/v3/covid-19/countries/india`
      );
      const data = await response.json();
      setApidata(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = async () => {
    // Implement your search logic here
    try {
      const response = await fetch(
        `https://disease.sh/v3/covid-19/countries/${search}`
      );
      const data = await response.json();
      setApidata(data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div>
        <input
          type="search"
          placeholder="Search here ..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <ul>
        {apidata !== null && Object.keys(apidata).length > 0 && (
          <>
            <li>Country: {apidata.country}</li>
            <li>Cases: {apidata.cases}</li>
            <li>Today Cases: {apidata.todayCases}</li>
            <li>Deaths: {apidata.deaths}</li>
            <li>Active: {apidata.active}</li>
          </>
        )}
      </ul>
    </>
  );
}
export default App;
