import React, { FunctionComponent } from "react";

import "../custom.css";
import { Route } from "react-router";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import { Layout } from "./components/Layout";

const App: FunctionComponent = () => {
    return (
       <Layout>
           <Route exact path='/' component={Home} />
           <Route path='/fetch-data' component={FetchData} />
       </Layout>
    );
};

export { App };
