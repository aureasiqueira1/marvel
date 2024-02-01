import React from "react";
import { Provider } from "react-redux";
import { store } from "../Redux/store";
import GlobalStyle from "@/styles/global";
import "bootstrap/dist/css/bootstrap.min.css";

const MyApp = ({ Component, pageProps }: any) => {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
        <GlobalStyle />
      </Provider>
    </>
  );
};

export default MyApp;
