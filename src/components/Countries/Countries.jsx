import { use, useState } from "react";
import ShowCountries from "./ShowCountries";

export default function Countries({ fetchedCountries }) {
  const countriesData = use(fetchedCountries);
  const countries = countriesData.countries;

  const [visitedCountry, setVisitedCountry] = useState([]);

  const handleVisited = (desh) => {
    const newVisitedCountries = [...visitedCountry, desh];
    setVisitedCountry(newVisitedCountries);
  };

  const [visitedFlag, setVisitedFlag] = useState([]);

  const handleVisitedFlag = (desh) => {
    const newVisitedFlag = [...visitedFlag, desh];
    setVisitedFlag(newVisitedFlag);
  };
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
        }}
      >
        Visited Countries: {visitedCountry.length}
      </h1>
      <ol>
        {visitedCountry.map((desh) => (
          <li key={desh.cca3.cca3}>{desh.name.common}</li>
        ))}
      </ol>
      <li>
        {visitedFlag.map((desh) => (
          <img
            style={{
              height: "70px",
              width: "150px",
              margin: "10px",
            }}
            src={desh.flags.flags.png}
            alt=""
          />
        ))}
      </li>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
        }}
      >
        {countries.map((desh) => (
          <ShowCountries
            key={desh.cca3.cca3}
            desh={desh}
            handleVisited={handleVisited}
            handleVisitedFlag={handleVisitedFlag}
          ></ShowCountries>
        ))}
      </div>
    </div>
  );
}
