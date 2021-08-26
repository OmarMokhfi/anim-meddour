import styles from "../styles/Playground.module.scss";
import { motion } from "framer-motion";

function Playground() {
  const variants = {
    up: { translateY: "-70%" },
    down: { translateY: "-60%" },
  };
  return (
    <div className={[styles.container, "container-fluid"].join(" ")}>
      <div className="row w-100">
        <div className="col-lg-3 col-md-5 col-12 d-flex align-items-center">
          <motion.div
            layoutId={2}
            className={[styles.card, "card text-center"].join(" ")}
          >
            Advanced Animation
          </motion.div>
        </div>
        <div
          className={[
            styles.content,
            "col-lg-9 col-md-7 col-12 mt-lg-0 mt-md-0 mt-5 d-flex justify-content-center align-items-center",
          ].join(" ")}
        >
          <motion.div
            whileHover={{ translateY: ["-30%", "-20%"] }}
            transition={{ repeat: Infinity }}
            className={[styles.parent, "mx-auto"].join(" ")}
          ></motion.div>
          <div className={styles.left}></div>
          <div className={styles.right}></div>
        </div>
      </div>
    </div>
  );
}

export default Playground;
