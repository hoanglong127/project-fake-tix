import React, { Fragment } from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ButtonScrollTop from "../../../components/ButtonScrollTop";

const MainLayout = ({ children }) => {
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
