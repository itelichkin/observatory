export class AstronomicalObject {
  protected id: number;
  protected name: string;
  protected weight: number;
  protected diameter: number;
  protected acceleration: number;
  protected speed: number;
  protected discoverer: string;

  constructor(id: number, name: string, weight: number, diameter: number, acceleration: number, speed: number, discoverer: string) {
    this.id = id;
    this.name = name;
    this.weight = weight;
    this.diameter = diameter;
    this.acceleration = acceleration;
    this.speed = speed;
    this.discoverer = discoverer;
  }

  get AstronomicalObjectName() {
    return this.name;
  }

  get AstronomicalObjectWeight() {
    return this.weight;
  }

  get AstronomicalObjectDiameter() {
    return this.diameter;
  }

  get AstronomicalObjectAcceleration() {
    return this.acceleration;
  }

  get AstronomicalObjectSpeed() {
    return this.speed;
  }
}
