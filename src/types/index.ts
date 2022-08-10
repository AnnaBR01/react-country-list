interface IFlags {
  png: string;
  svg: string;
}

interface ILanguage {
  official: string;
  common: string;
}

interface INativeName {
  [key: string]: ILanguage | undefined;
}

interface IName {
  common: string;
  official: string;
  nativeName: INativeName;
}

export interface IInitialCountry {
  flags: IFlags;
  name: IName;
  capital: string[];
  region: string;
  area: number;
  population: number;
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
