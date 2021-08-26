import styles from "../styles/Basic.module.scss";
import Link from "next/link";

function Basic() {
  return (
    <div className={[styles.container, "container-fluid"].join(" ")}>
      <div className="row w-100">
        <div className="col-lg-3 col-md-5 col-12">
          <div className={[styles.card, "card text-center"].join(" ")}>
            Basic Animation
          </div>
        </div>
        <div className="col-lg-9 col-md-7 col-12 mt-lg-0 mt-md-0 mt-5 d-flex justify-content-center align-items-center">
          <span>
            Of course there is no basic animation. Only{" "}
            <Link href="/playground">Advanced</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Basic;
