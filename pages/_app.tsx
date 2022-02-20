import "bootstrap/dist/css/bootstrap.css";
import type { AppProps } from "next/app";
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
    </>
  );
}

export default MyApp;
