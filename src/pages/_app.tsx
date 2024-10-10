import { withFronteggApp } from "@frontegg/nextjs/pages";
import React from "react";
import "../../styles/globals.css";

const MyApp = ({ Component, pageProps }): React.JSX.Element => {
  return <Component {...pageProps} />;
};

export default withFronteggApp(MyApp, {
  hostedLoginBox: true,
  authOptions: {
    keepSessionAlive: true,
  },
});
