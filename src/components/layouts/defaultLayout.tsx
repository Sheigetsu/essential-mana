// @ts-ignore
import React from "react";
// @ts-ignore
import PropTypes from "prop-types";

import Header from "../header";
import Footer from "../footer";
import Container from "react-bootstrap/Container";

const DefaultLayout = ({ children: content }) => {
    return (
        <div className="page-wrap">
            <Header/>
            <Container>
                <main className="site-main">{content}</main>
            </Container>
            <Footer/>
        </div>
    );
};

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
    categories: PropTypes.array
};

export default DefaultLayout;
