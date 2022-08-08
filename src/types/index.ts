export interface IData {
  [key: string]: any;
}

export interface ICountry {
  area: number;
  capital: string;
  flag: string;
  name: string;
  population: number;
  region: string;
}

export type BadgeLabel = "Area" | "Population";

export enum Color {
  Primary = "primary",
  Secondary = "secondary",
  Success = "success",
  Info = "info",
  Warning = "warning",
  Danger = "danger",
  Light = "light",
  Dark = "dark",
}
