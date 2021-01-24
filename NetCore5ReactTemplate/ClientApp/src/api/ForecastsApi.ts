import { WeatherForecast } from "@app/models/WeatherForecast";
import { ApiBase } from "@utils/api/ApiBase";
import { ApiResponse } from "@utils/api/ApiResponse";
import { Mapper } from "@utils/mapping/Mapper";
import { WeatherForecastDto } from "./models/responses/WeatherForecastDto";

export class ForecastsApi extends ApiBase {
   public static async getForecasts(): Promise<ApiResponse<WeatherForecast[]>> {
      const response = await this.get<WeatherForecast[]>("/weather-forecast");

      if (response.data) {
         response.data = response.data.map((dto: WeatherForecastDto) => Mapper.map<WeatherForecast>(
           nameof<WeatherForecastDto>(),
           nameof<WeatherForecast>(),
           dto
         ));
      }

      return response;
   }
}