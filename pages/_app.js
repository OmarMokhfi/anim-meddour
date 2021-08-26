import "../styles/globals.scss";
import { AnimateSharedLayout, MotionConfig } from "framer-motion";

function MyApp({ Component, pageProps }) {
  return (
    <MotionConfig transition={{ duration: 0.3 }}>
      <AnimateSharedLayout type="switch">
        <Component {...pageProps} />
      </AnimateSharedLayout>
    </MotionConfig>
  );
}

export default MyApp;
