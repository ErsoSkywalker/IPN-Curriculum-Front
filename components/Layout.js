import React from "react";
import Head from "next/head";
import Navigation from "../components/Navigation";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
          integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
          crossorigin="anonymous"
        />
        <title>Curriculum IPN</title>
      </Head>
      {router.pathname == "/login" ? (
        <div>{children}</div>
      ) : (
        <div>
          <Navigation />
          {children}
        </div>
      )}
    </>
  );
};

export default Layout;
