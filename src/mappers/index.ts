import { ICountry } from "../types/index";
import { IInitialCountry } from "../types/index";

export const transformeCountries = (countries: IInitialCountry[]) => {
  const transformedCountries: ICountry[] = countries.map((country) => {
    return {
      flag: country.flags.svg,
      name: country.name.common,
      capital: country.capital[0],
      region: country.region,
      area: country.area,
      population: country.population,
    };
  });
  return transformedCountries;
};
