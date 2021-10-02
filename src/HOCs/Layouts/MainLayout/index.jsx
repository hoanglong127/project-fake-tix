import React, { Fragment, useEffect } from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ButtonScrollTop from "../../../components/ButtonScrollTop";

const MainLayout = ({ children }) => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  });

  return (
    <Fragment>
      <Header />
      {children}
      <Footer />
      <ButtonScrollTop />
    </Fragment>
  );
};

export default MainLayout;
