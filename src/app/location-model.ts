import { GeoLocation } from './geoLocation-model';

export class SFMoviesModel {
  title: string;
  locations: string;
  director: string;
  actor1: string;
  actor2: string;
  actor3: string;
  productionCompany: string;
  geoLocation: GeoLocation;


  constructor(data: any) {
      this.title = data['title'];
      this.locations = data['locations'];
      this.director = data['director'];
      this.actor1 = data['actor1'];
      this.actor2 = data['actor2'];
      this.actor3 = data['actor3'];
      this.productionCompany = data['productionCompany'];
  }
}
