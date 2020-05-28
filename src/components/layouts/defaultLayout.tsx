// @ts-ignore
import React from "react";
// @ts-ignore
import PropTypes from "prop-types";

import Header from "../header";
import Footer from "../footer";

const DefaultLayout = ({ children: content }) => {
  return (
    <>
      <Header />
      <main>{content}</main>
      <Footer />
    </>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
  categories: PropTypes.array,
};

export default DefaultLayout;
