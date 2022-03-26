/** @format */

import React from "react";
import "./Navbar.css";
import { HiViewGrid, HiViewList, HiSearch } from "react-icons/hi";
import { AiTwotoneShopping } from "react-icons/ai";
import { AnimateSharedLayout } from "framer-motion";

const Navbar = ({ list, setList }) => {
  return (
    <div className="Navbar">
      <div className="logo">
        <p>watches</p>
      </div>
      <div className="icon" onClick={() => setList(!list)}>
        <AnimateSharedLayout>
          {list ? <HiViewList /> : <HiViewGrid />}
        </AnimateSharedLayout>
      </div>
    </div>
  );
};

export default Navbar;
