/** @format */

import React, { useState } from "react";
import Grid from "./components/grid/Grid";
import Navbar from "./components/navbar/Navbar";
import Data from "./components/data/Data";
import List from "./components/list/List";
import "./App.css";

const App = () => {
  const [list, setList] = useState(false);
  return (
    <div className="App">
      <Navbar list={list} setList={setList} />
      {list ? <List /> : <Grid />}
    </div>
  );
};

export default App;
