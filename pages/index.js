import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={[styles.container, "container"].join(" ")}>
      <Head>
        <title>Animation Playground</title>
        <meta
          name="description"
          content="An animation requested by a dear friend"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={[styles.main, "row"].join(" ")}>
        <h1 className={styles.title}>Animation Playground</h1>

        <p className={styles.description}>
          Animation was requested by{" "}
          <a href="https://github.com/ghilesmeddour">Ghiles Meddour</a> and made
          with <a href="https://www.framer.com/developers/">Framer Motion</a>
        </p>
      </section>

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
