import { RouterState } from "connected-react-router";

import { ForecastsStore } from "@app/Forecasts/redux/Forecasts.store";
import { NotifierStore } from "@app/Notifier/redux/Notifier.store";

export interface IAppState {
   router: RouterState;
   notifierStore: NotifierStore;

   forecastsStore: ForecastsStore;
}
