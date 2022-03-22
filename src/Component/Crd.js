import React from "react";

const Crd = () => {
  const country = {
    name: "Barcelona",
    picture: "https://www.docplanner.com/images/barcelona.png",
    para: "great city",
  };
  return (
    <div className="crd">
      <img src={country.picture}></img>
      <h3>{country.name}</h3>
      <p>{country.para}</p>
    </div>
  );
};

export default Crd;
