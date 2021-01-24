import React, { FunctionComponent, useEffect } from "react";

import { LoaderBlock } from "@shared/molecules/Loaders/LoaderBlock";

import { WeatherForecast } from "@app/models/WeatherForecast";

export interface IForecastsProps {
   forecasts: WeatherForecast[];
   forecastsAreLoading: boolean;
}

export interface IForecastsCallProps {
   getForecasts: () => void;
}

type Props = IForecastsProps & IForecastsCallProps;


const Forecasts: FunctionComponent<Props> = (props: Props) => {
   const { forecasts, forecastsAreLoading, getForecasts } = props;

   useEffect(() => {
      getForecasts();
   }, []);

   if (forecastsAreLoading) {
      return <LoaderBlock isLoading={forecastsAreLoading} />;
   }

   const renderForecastsTable = () => {
      return (
        <table className='table table-striped' aria-labelledby="tabelLabel">
           <thead>
           <tr>
              <th>Date</th>
              <th>Temp. (C)</th>
              <th>Temp. (F)</th>
              <th>Summary</th>
           </tr>
           </thead>
           <tbody>
           {forecasts.map((forecast: any) =>
             <tr key={forecast.date}>
                <td>{forecast.date}</td>
                <td>{forecast.temperatureC}</td>
                <td>{forecast.temperatureF}</td>
                <td>{forecast.summary}</td>
             </tr>
           )}
           </tbody>
        </table>
      );
   };

   return (
     <div>
        <h1 id="tabelLabel">Weather forecast</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {renderForecastsTable()}
     </div>
   );
};

export { Forecasts };
