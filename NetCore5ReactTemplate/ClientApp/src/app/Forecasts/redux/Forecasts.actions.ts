import { ForecastsStore } from "@app/Forecasts/redux/Forecasts.store";
import { createAction } from "@utils/redux/createAction";

export class ForecastsActions {
   public static readonly PREFIX = "FORECASTS_";
   public static readonly UPDATE_STORE = ForecastsActions.PREFIX + "UPDATE_STORE";

   public static readonly GET_FORECASTS = ForecastsActions.PREFIX + "GET_FORECASTS";

   public static updateStore =
     (state: Partial<ForecastsStore>) => createAction(ForecastsActions.UPDATE_STORE, state);

   public static getForecasts = () =>
     createAction(ForecastsActions.GET_FORECASTS);
}