import React from 'react';
import Style from "./style";
import {Typography} from "@mui/material";

const Header = () => {
    const classes = Style();
    return (
        <table className={classes.root} >
            <tr>
                <th className={classes.th} style={{width:'66%'}}><Typography className={classes.text}>text</Typography></th>
                <th className={classes.th}><Typography className={classes.text}>condition</Typography></th>
                <th className={classes.th}><Typography className={classes.text}>delete</Typography></th>
            </tr>
        </table>
    );
};

export default Header;