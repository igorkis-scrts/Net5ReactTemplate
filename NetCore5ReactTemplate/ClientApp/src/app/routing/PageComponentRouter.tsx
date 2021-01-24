import { ForecastsContainer } from "@app/Forecasts/Forecasts.container";
import React, { FunctionComponent } from "react";
import { Route } from "react-router";

import { NotifierContainer } from "@app/Notifier/Notifier.container";
import { Layout } from "@app/Layout/Layout";
import { Home } from "@app/Pages/Home/Home";

import { appUrls } from "./appUrls";


const PageComponentRouter: FunctionComponent = () => {
   return (
     <Layout>
        <Route exact path={appUrls.rootPath} component={Home} />
        <Route path={appUrls.fetchData} component={ForecastsContainer} />
        <NotifierContainer />
     </Layout>
   );
};

export { PageComponentRouter };
