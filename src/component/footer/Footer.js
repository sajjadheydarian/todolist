import React from 'react';
import Style from "./Style";
import {Typography} from "@mui/material";
import {Link} from "react-router-dom";

const Footer = () => {
    const classes=Style();
    return (
        <div className={classes.root}>
            <Link to={'/add'}><button className={classes.btn}>+</button></Link>
        </div>
    );
};

export default Footer;