import { WeatherForecast } from "@app/models/WeatherForecast";

export class ForecastsStore {
   public forecasts: WeatherForecast[];
   public forecastsAreLoading: boolean;

   constructor() {
      this.forecasts = [];
      this.forecastsAreLoading = false;
   }
}