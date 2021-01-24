export class MappingProfileBase {
   protected static autoMap<TSource, TDestination>(source: TSource, destination: TDestination): TDestination {
      let keys = Object.keys(destination);
      if (keys.length === 0) {
         keys = Object.keys(source);
      }

      keys.forEach((propertyName: string) => {
         if (propertyName in source) {
            destination[propertyName] = source[propertyName];
         }
      });

      return destination;
   }
}
