import styles from "../styles/Basic.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";

function Basic() {
  return (
    <div className={[styles.container, "container-fluid"].join(" ")}>
      <div className="row w-100">
        <div className="col-lg-3 col-md-5 col-12">
          <motion.div
            layoutId={1}
            className={[styles.card, "card text-center"].join(" ")}
          >
            Basic Animation
          </motion.div>
        </div>
        <div className="col-lg-9 col-md-7 col-12 mt-lg-0 mt-md-0 mt-5 d-flex justify-content-center align-items-center">
          <span className="mr-2">
            Of course there is no basic animation. Only{" "}
          </span>
          <motion.span layoutId={2}>
            <Link href="/playground">Advanced Animation</Link>
          </motion.span>
        </div>
      </div>
    </div>
  );
}

export default Basic;
