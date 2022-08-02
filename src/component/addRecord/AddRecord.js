import React, {useState} from 'react';
import Style from "./Style";
import {Typography} from "@mui/material";
import {Link} from "react-router-dom";

const AddRecord = () => {
    const classes = Style();
    const [text,setText]=useState();
    const handleAdd = () => {
      if (!text)
          return alert("Unsuccessful");
      localStorage.setItem(text,'0');
      alert("successful");
      window.location.assign('/');
    }
    return (
        <div className={classes.root}>
            <h1>New record</h1>
            <div className={classes.divInput}>
                <Typography className={classes.Text} >Text:</Typography>
                <input value={text} className={classes.input} onChange={(event =>setText(event.target.value))}/>
            </div>
            <div style={{width:"100%"}}>
            <button className={classes.btn} onClick={handleAdd}>add</button>
            <Link to={'/'}><button className={classes.btn} style={{color:'red'}}>cancel</button></Link>
        </div>
        </div>
    );
};

export default AddRecord;