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
}



