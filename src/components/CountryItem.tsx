import React from "react";
import { Badge } from "./Badge";
import { Color, ICountry } from "../types/index";

interface IProps {
  country: ICountry;
}

export const CountryItem = ({ country }: IProps) => {
  return (
    <li className="list-group-item ">
      <div className="row align-items-center">
        <div className="col-1">
          <img src={country.flag} alt="flag" width={50} />
        </div>
        <div className="col-3">{country.name}</div>
        <div className="col-2">{country.capital}</div>
        <div className="col-2">{country.region}</div>
        <div className="col-2">
          <Badge value={country.area} type="Area" color={Color.Primary} />
        </div>
        <div className="col-2">
          <Badge
            value={country.population}
            type="Population"
            color={Color.Secondary}
          />
        </div>
      </div>
    </li>
  );
};
