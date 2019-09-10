export class TrackInfo {
  id: number;
  name: string;
  abbr: string;
  latitude: number;
  longitude: number;

  constructor(id: number,
    name: string,
    abbr: string,
    latitude: number,
    longitude: number) {
        this.id = id;
        this.name = name;
        this.abbr = abbr;
        this.latitude = latitude;
        this.longitude = longitude;
    }
}
