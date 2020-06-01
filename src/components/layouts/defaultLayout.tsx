// @ts-ignore
import React from "react";
// @ts-ignore
import PropTypes from "prop-types";

import Header from "../header";
import Footer from "../footer";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";

const DefaultLayout = ({ children: content }) => {
    return (
        <>
            <Header/>
            <main>
                <Container>
                    {content}
                </Container>
            </main>
            <Footer/>
        </>
    );
};

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
    categories: PropTypes.array
};

export default DefaultLayout;
