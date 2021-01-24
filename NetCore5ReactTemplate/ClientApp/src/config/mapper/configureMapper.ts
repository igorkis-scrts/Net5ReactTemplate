import { WeatherForecastMappingProfile } from "@config/mapper/profiles/WeatherForecastMappingProfile";
import { Mapper } from "@utils/mapping/Mapper";

export function configureMapper() {
   Mapper.addProfiles([
      new WeatherForecastMappingProfile()
   ]);
}
