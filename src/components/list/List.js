/** @format */

import react from "react";
import "./List.css";
import Data from "../data/Data";
import { motion } from "framer-motion";
import {
  cardAnimation,
  ImageTextTransition,
  cardTransition,
} from "../animation/Animation";

const List = () => {
  return (
    <div className="list">
      {Data.map((watch, index) => {
        return (
          <motion.div
            className="list_card"
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
export default List;
