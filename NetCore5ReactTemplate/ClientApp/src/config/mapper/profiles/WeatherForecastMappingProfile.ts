import { WeatherForecast } from "@app/models/WeatherForecast";
import { IMapFunction } from "@utils/mapping/IMapFunction";
import { IMappingProfile } from "@utils/mapping/IMappingProfile";
import { MapFunction } from "@utils/mapping/MapFunction";
import { MappingProfileBase } from "@utils/mapping/MappingProfileBase";
import { WeatherForecastDto } from "../../../api/models/responses/WeatherForecastDto";

export class WeatherForecastMappingProfile extends MappingProfileBase implements IMappingProfile {
   public get(): IMapFunction[] {
      return [
         new MapFunction(
           nameof<WeatherForecastDto>(),
           nameof<WeatherForecast>(),
           WeatherForecastMappingProfile.mapForecastDtoToForecast
         ),
      ];
   }

   private static mapForecastDtoToForecast(dto: WeatherForecastDto): WeatherForecast {
      return MappingProfileBase.autoMap<WeatherForecastDto, WeatherForecast>(dto, new WeatherForecast());
   }
}
