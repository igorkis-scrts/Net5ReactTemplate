import { connectRouter } from "connected-react-router";
import { History } from "history";
import { ReducersMapObject } from "redux";

import { State } from "@State";
import { NotifierReducer } from "@app/Notifier/redux/Notifier.reducer";
import { HistoryReducer } from "@utils/redux/history/History.reducer";
import { ForecastsReducer } from "@app/Forecasts/redux/Forecasts.reducer";

import { AppProviderReducer } from "@config/components/AppProvider/redux/AppProvider.reducer";

export function getReducers(history: History): ReducersMapObject<State, any> {
   return {
      router: connectRouter(history),
      historyStore: HistoryReducer,
      appProviderStore: AppProviderReducer,
      notifierStore: NotifierReducer,
      forecastsStore: ForecastsReducer
   };
}
