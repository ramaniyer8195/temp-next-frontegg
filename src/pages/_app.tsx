import { withFronteggApp } from "@frontegg/nextjs/pages";
import React from "react";
import "../../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default withFronteggApp(MyApp, {
  hostedLoginBox: true,
  authOptions: {
    keepSessionAlive: true,
  },
});
