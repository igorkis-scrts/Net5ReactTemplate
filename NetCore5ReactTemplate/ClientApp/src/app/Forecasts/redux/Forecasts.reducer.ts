import { Reducer } from "@utils/redux/Reducer";

import { ForecastsActions } from "@app/Forecasts/redux/Forecasts.actions";
import { ForecastsStore } from "@app/Forecasts/redux/Forecasts.store";

export const ForecastsReducer = Reducer(new ForecastsStore(), ForecastsActions.UPDATE_STORE);
