export interface AstronomicalObjectType {
  id: number;
  name: string;
  weight: number;
  speed: number;
  discoverer: string;
  position: {
    x: number,
    y: number
  };
  size?: {
    width: number,
    height: number
  };
  isUniverse?: boolean;
  isGalaxy?: boolean;
  isSystem?: boolean;
  isStar?: boolean;
  isPlanet?: boolean;
  isSatellite?: boolean;
  galaxyId?: number;
  imageName?: string;
}

export interface GalaxyObjectType extends AstronomicalObjectType {
  diameter?: number;
  numberOfStars?: string;
  thickness?: number;
}

export interface PlanetoidObjectType extends AstronomicalObjectType, GalaxyObjectType {
  systemId?: number;
  parentRadius?: number;
  angle?: number;
  orbitSpeed?: number;
}





