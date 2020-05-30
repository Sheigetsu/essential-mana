// @ts-ignore
import React from "react";
// @ts-ignore
import PropTypes from "prop-types";

import Header from "../header";
import Footer from "../footer";

const DefaultLayout = ({ children: content }) => {
  return (
    <div className="page-wrap">
      <Header />
      <main className="site-main">{content}</main>
      <Footer />
    </div>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
  categories: PropTypes.array,
};

export default DefaultLayout;
