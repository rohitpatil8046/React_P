import React from "react";
import ReactDom from 'react-dom';
import developer , {favprog, myName, myNames} from "./App";




ReactDom.reander(
  <>
  <ol>
    <li>Rohit Patil</li>
    <li> {developer} </li>
    <li>{favprog}</li>
    <li>{myName()}</li>
    <li>{myNames()}</li>
  </ol>
  </>,
  document.getElementById("root")
);