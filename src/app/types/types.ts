export interface AstronomicalObjectType {
  id?: number;
  name?: string;
  weight?: number;
  speed?: number;
  discoverer?: string;
  position?: {
    x: number,
    y: number
  };
  size?: {
    width: number,
    height: number
  };
  type?: string;
  isUniverse?: boolean;
  isGalaxy?: boolean;
  isSystem?: boolean;
  isStar?: boolean;
  isPlanet?: boolean;
  isSatellite?: boolean;
  galaxyId?: number;
  imageName?: string;
}

export interface UniverseObjectType extends AstronomicalObjectType {
  galaxiesAmount?: number;
  age?: string;
  averageTemperature?: string;
  diameter?: string;
}

export interface GalaxyObjectType extends AstronomicalObjectType {
  diameter?: string;
  numberOfStars?: string;
  thickness?: string;
}

export interface SystemObjectType extends AstronomicalObjectType {
  age?: string;
  starsAmount?: string;
  planetsAmount?: string;
  dwarfPlanetAmount?: string;
  satellitesAmount?: string;
  smallBodyAmount?: string;
  cometAmount?: string;
}

export interface PlanetoidObjectType extends AstronomicalObjectType {
  systemId?: number;
  planetId?: number;
  parentRadius?: number;
  angle?: number;
  orbitSpeed?: number;
  observers?: number[];
  rings?;
 }

export interface GlobalAstronomicalObjectType extends PlanetoidObjectType, GalaxyObjectType, UniverseObjectType, SystemObjectType {

}

export interface ObserverType {
  id: number;
  name: string;
  observablePlanets: number[];
}
export interface DropdownData {
  label: string;
  value: number;
}





