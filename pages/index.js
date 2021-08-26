import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className={[styles.container]}>
      <Head>
        <title>Animation Playground</title>
        <meta
          name="description"
          content="An animation requested by a dear friend"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={[styles.main, "container align-items-center"].join(" ")}>
        <section className="row justify-content-center">
          <h1 className={styles.title}>Animation Playground</h1>

          <p className={styles.description}>
            Animation was requested by{" "}
            <a
              href="https://github.com/ghilesmeddour"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ghiles Meddour
            </a>{" "}
            and made with{" "}
            <a
              href="https://www.framer.com/developers/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Framer Motion
            </a>
          </p>
        </section>
        <section className="row col-10 mx-auto">
          <div className="col-lg-6 col-md-6 col-12">
            <Link href="/basic" passHref={true}>
              <motion.div
                layoutId={1}
                className={[styles.card, "card text-center shadow-sm"].join(
                  " "
                )}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.04 }}
              >
                Basic Animation
              </motion.div>
            </Link>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <Link href="/playground" passHref={true}>
              <motion.div
                layoutId={2}
                className={[styles.card, "card text-center shadow-sm"].join(
                  " "
                )}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.04 }}
              >
                Advanced Animation
              </motion.div>
            </Link>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/OmarMokhfi"
          className="d-flex justify-content-center align-items-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="mr-4">Made with love by </span>
          <span>
            <Image
              src="/profile.jpeg"
              alt="Vercel Logo"
              width={32}
              height={32}
            />
          </span>
        </a>
      </footer>
    </div>
  );
}
