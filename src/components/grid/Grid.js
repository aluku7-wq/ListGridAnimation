/** @format */

import React from "react";
import Data from "../data/Data";
import "./Grid.css";
import { motion } from "framer-motion";
import {
  cardAnimation,
  ImageTextTransition,
  cardTransition,
} from "../animation/Animation";

const Grid = () => {
  return (
    <div className="grid">
      {Data.map((watch, index) => {
        return (
          <motion.div
            className="grid_card"
            layoutId={watch.image}
            transition={cardTransition}>
            <motion.img
              src={`../images/${watch.image}`}
              alt="aluku"
              variants={cardAnimation}
              initial="hidden"
              animate="show"
              transition={ImageTextTransition}
            />
            <motion.p
              variants={cardAnimation}
              initial="hidden"
              animate="show"
              transition={ImageTextTransition}>
              {watch.name}
            </motion.p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Grid;
