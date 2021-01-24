import { ForecastsStore } from "@app/Forecasts/redux/Forecasts.store";
import { RouterState } from "connected-react-router";

import { IAppState } from "@utils/redux/IAppState";
import { NotifierStore } from "@app/Notifier/redux/Notifier.store";
import { HistoryStore } from "@utils/redux/history/History.store";
import { AppProviderStore } from "@config/components/AppProvider/redux/AppProvider.store";

export class State implements IAppState {
   public router: RouterState;
   public historyStore: HistoryStore;
   public appProviderStore: AppProviderStore;
   public notifierStore: NotifierStore;

   public forecastsStore: ForecastsStore;
}
