import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";

const Header = ({ siteTitle, categories }) => (
    <header>
        <div>
            <ul>
                <li>
                    <a href="/">{siteTitle}</a>
                </li>
                {categories.map(link => {
                    <li>
                        <a href={link.url}>{link.text}</a>
                    </li>;
                })}
            </ul>
        </div>
    </header>
);

Header.propTypes = {
    siteTitle: PropTypes.string,
    categories: PropTypes.array
};

Header.defaultProps = {
    siteTitle: `Essential-mana`,
    categories: []
};

export default Header;
