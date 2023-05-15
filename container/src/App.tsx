import React from "react";
import ReactDOM from "react-dom";
import { Counter } from "counter/Counter";
import { Header } from "header/Header";
import "./index.css";
const App = () => (
  <div className="container">
    <Header /> {/*Micro frontend app*/}
    <Counter /> {/*Micro frontend app*/}
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
