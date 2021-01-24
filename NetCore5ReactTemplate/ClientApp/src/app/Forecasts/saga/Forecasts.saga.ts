import { WeatherForecast } from "@app/models/WeatherForecast";
import { put } from "@redux-saga/core/effects";

import { ForecastsActions } from "@app/Forecasts/redux/Forecasts.actions";
import { ForecastsStore } from "@app/Forecasts/redux/Forecasts.store";
import { ApiResponse } from "@utils/api/ApiResponse";

import { SagaBase } from "@utils/saga/SagaBase";
import { ForecastsApi } from "../../../api/ForecastsApi";

export class ForecastsSaga extends SagaBase {
   private static* updateStore(partialStore: Partial<ForecastsStore>) {
      yield put(ForecastsActions.updateStore(partialStore));
   }

   public static* loadForecasts() {
      yield ForecastsSaga.updateStore({
         forecastsAreLoading: true,
      });

      const response: ApiResponse<WeatherForecast[]> = yield ForecastsApi.getForecasts();
      if (response.hasError()) {
         yield ForecastsSaga.updateStore({
            forecastsAreLoading: false,
         });
         yield SagaBase.displayClientError(response);
         return;
      }

      yield ForecastsSaga.updateStore({
         forecastsAreLoading: false,
         forecasts: response.data,
      });
   }
}