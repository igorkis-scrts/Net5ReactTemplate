import React, { FunctionComponent, useEffect, useState } from "react";

const FetchData: FunctionComponent = () => {
    const [ forecasts, setForecasts ] = useState<any>([]);
    const [ loading, setLoading ] = useState<boolean>(true);

    useEffect(() => {
        async function populateWeatherData() {
            const response = await fetch("weatherforecast");
            const data = await response.json();
            setLoading(false);
            setForecasts(data);
        }

        populateWeatherData();
    }, []);

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

    const contents = loading
       ? <p><em>Loading...</em></p>
       : renderForecastsTable();

    return (
       <div>
           <h1 id="tabelLabel">Weather forecast</h1>
           <p>This component demonstrates fetching data from the server.</p>
           {contents}
       </div>
    );
};

export { FetchData };
