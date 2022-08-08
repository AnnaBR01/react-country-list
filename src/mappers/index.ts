import { ICountry } from "../types/index";
import { IData } from "../types/index";

export const transformeCountries = (countries: IData) => {
  const transformedCountries: ICountry[] = countries.map((country: any) => {
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
