import type { AppProps } from "next/app";
import Script from "next/script";
import Head from "next/head";
import "../styles/utilities.css";
import "../styles/home.css";
import "../styles/404.css";
import "../styles/member.css";
import "../styles/sidebar.css";
import "../styles/transactions.css";
import "../styles/profile.css";
import "../styles/checkout.css";
import "../styles/onboarding.css";
import "../styles/register.css";
import "../styles/login.css";
import "../styles/checkoutComplete.css";
import "../styles/detail.css";
import "../styles/transaction-detail.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>StoreGG</title>
      </Head>
      <Component {...pageProps} />

      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossOrigin="anonymous"
      ></Script>
    </>
  );
}

export default MyApp;
