import { Zone } from './zone.model';

export class SportEvent {
  constructor(
    public id: number,
    public name: string,
    public date: string,
    public imageUrl: string,
    public description: string,
    public zones: Zone[]
  ) {
    this.id = id;
    this.name = name;
    this.date = date;
    this.imageUrl = imageUrl;
    this.description = description;
    this.zones = zones;
  }
}
