// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
//import animals from "./data.js";
import cars from "./practice";

//console.log(animals);

//const [cat, dog] = animals;

//console.log(cat);

//destructure array cat.name has to be the same name in the array
//const { name, sound } = cat;

//console.log(sound);

const [honda, tesla] = cars;

const {
  speedStats: { topSpeed: hondaTopSpeed },
} = honda;

const {
  speedStats: { topSpeed: teslaTopSpeed },
} = tesla;

const {
  coloursByPopularity: [[hondaTopColour]],
} = honda;
const {
  coloursByPopularity: [[teslaTopColour]],
} = tesla;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);