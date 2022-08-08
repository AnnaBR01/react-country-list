import React from "react";
import { CountryList } from "./components/CountryList";
import countries from "./country-data.json";
import { transformeCountries } from "./mappers/index";

export const App = () => {
  const transformedCountries = transformeCountries(countries);

  return (
    <div className="container-md mt-2 text-center">
      <h2>Country list</h2>
      <CountryList countries={transformedCountries} />
    </div>
  );
};
