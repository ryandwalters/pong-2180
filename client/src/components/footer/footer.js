import React, { Component } from "react";
import './footer.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Footer = () => {
    return(
        <footer className="container">
            <div className="text-center navbar navbar-fixed-bottom">
                <div className="container-fluid">
                    <span className="bungeeFont">© 2180 Copyright</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer;