import React, {useEffect, useState} from 'react';
import Style from "./style";

const Main = () => {
    const classes = Style();
    const [textsName, setTextsName] = useState([]);
    // const [condition, setCondition] = useState('');
    useEffect(() => {
        let j = [];
        for (let i = 0; i < localStorage.length; i++) {
            j.push(localStorage.key(i));
        }
        setTextsName(j);
    }, [localStorage])
    const handleCon = (text) => {
        if (localStorage[text] === '0') {
            localStorage[text] = '1';
        } else {
            localStorage[text] = '0';
        }
        window.location.reload();
    }
    const handelDel = (text) => {
        if (localStorage[text]) {
            localStorage.removeItem(text);
            window.location.reload();
        }
    }
    return (
        <div className={classes.root}>
            <table style={{width: '100%'}}>
                <tbody>
                {
                    textsName.map(item => {
                        return <tr className={classes.rowTable}>
                            <td className={classes.columnText}>{item}</td>
                            <td className={classes.column}>
                                <button className={classes.btnCon}
                                        onClick={() => handleCon(item)}>{localStorage[item] === '0' ? "undone" : 'done'}</button>
                            </td>
                            <td className={classes.column}>
                                <button className={classes.btnDel} onClick={() => handelDel(item)}>delete</button>
                            </td>
                        </tr>
                    })
                }
                </tbody>
            </table>
        </div>
    );
};

export default Main;