import { useState } from "react";

import "./Country.css";


export default function ShowCountries({ desh , handleVisited,handleVisitedFlag}) {
  const country = desh;
  const flag = desh.flags.flags.png;
  const population = desh.population.population;
  const capital = desh.capital.capital;
  const area = desh.area.area;

  const [visited, setVisited] = useState(false);

  const handleClick = () => {


    //Basic
    // if(visited){
    //     setVisited(false)
    // }
    // else{
    //     setVisited(true)
    // }

    //Ternary1
    //visited ?setVisited(false):setVisited(true)

    //Ternary2
    //setVisited(visited ? false : true)

    //simple
    setVisited(!visited)
    handleVisited(desh)
    handleVisitedFlag(desh)

  };

  return (
    

 


        <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        margin: "20px",
        padding: "30px",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "15px",
        border: "1px solid white",
        borderRadius: "10px",
        boxShadow: "1px 1px 1px 1px white",
      }} className={`${visited && "visited"}`}
    >
      <h3>Desh: {country.name.common}</h3>
      <img
        style={{
          height: "70px",
          width: "150px",
        }}
        src={flag}
        alt=""
      />
      <h3>Population: {population}</h3>
      <h3>Capital: {capital}</h3>
      <h3>Area: {area}</h3>

      <h3>{area > 300000 ? "Big country" : "Small Country"}</h3>
      <button onClick={handleClick}>
        {visited ? "Visited" : "Not Visited"}
      </button>
    </div>
  );
}
