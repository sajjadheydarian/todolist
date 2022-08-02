import React from 'react';
import Header from "./component/headar/Header";
import Style from "./Style";
import Footer from "./component/footer/Footer";
import Main from "./component/Main/Main";
import {BrowserRouter,HashRouter, Route, Switch} from "react-router-dom";
import AddRecord from "./component/addRecord/AddRecord";

const App = () => {
    const classes = Style();
    return (<div>
            <HashRouter>
                <Switch>
                    <Route path={'/Add'} component={AddRecord}/>
                    <Route path={'/'} render={() =>
                        <div className={classes.root}>
                            <Header/>
                            <Main/>
                            <Footer/>
                        </div>
                    }/>
                </Switch>
            </HashRouter>
        </div>
    );
};

export default App;