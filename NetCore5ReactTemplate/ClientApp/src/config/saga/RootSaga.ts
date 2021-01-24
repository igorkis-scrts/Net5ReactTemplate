import { ForecastsWatcher } from "@app/Forecasts/saga/Forecasts.watcher";
import { RootSagaBase } from "@utils/saga/RootSagaBase";
import { AppProviderWatcher } from "@config/components/AppProvider/saga/AppProvider.watcher";

export class RootSaga extends RootSagaBase {
   constructor() {
      super();

      this.addWatchers([
         new AppProviderWatcher(),

         new ForecastsWatcher()
      ]);
   }
}
