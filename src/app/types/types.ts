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
  isUniverse?: boolean;
  isGalaxy?: boolean;
  isSystem?: boolean;
  isStar?: boolean;
  isPlanet?: boolean;
  isSatellite?: boolean;
  galaxyId?: number;
  systemId?: number;
  imageName?: string;
}



