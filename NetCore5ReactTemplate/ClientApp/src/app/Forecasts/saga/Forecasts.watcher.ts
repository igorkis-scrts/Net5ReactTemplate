import { ForecastsActions } from "@app/Forecasts/redux/Forecasts.actions";
import { ForecastsSaga } from "@app/Forecasts/saga/Forecasts.saga";
import { WatcherBase } from "@utils/saga/WatcherBase";

export class ForecastsWatcher extends WatcherBase {
   constructor() {
      super();

      this.watchLatest(
        ForecastsActions.GET_FORECASTS,
        ForecastsSaga.loadForecasts
      );
   }
}
