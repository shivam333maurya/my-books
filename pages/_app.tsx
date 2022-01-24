import React from "react";
import Head from "next/head";
import "../styles/globals.scss";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <title>Case Study</title>
        <meta
          name="description"
          content=" One place to search for all the books world"
        />
        <meta
          name="viewport"
          content="width=device-width, height=device-height,  initial-scale=1.0, user-scalable=no,user-scalable=0"
        />
        <link rel="icon" href="/book.svg" />
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;
