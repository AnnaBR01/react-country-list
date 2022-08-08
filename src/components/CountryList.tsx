import React from "react";
import { CountryItem } from "./CountryItem";
import { ICountry } from "../types/index";

interface IProps {
  countries: ICountry[];
}

export const CountryList = ({ countries }: IProps) => {
  return (
    <ul className="list-group">
      {countries.map((country) => {
        return <CountryItem country={country} />;
      })}
    </ul>
  );
};
