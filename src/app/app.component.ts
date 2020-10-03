import { SFMoviesModel} from './location-model';
import { SfLocationService } from './sf-location.service';
import { SfGeocodeService} from './sf-geocode.service';
import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'sf-movies-map';
  lat = 37.773972;
  lng = -122.431297;

  filterText;

  // myControl = new FormControl();

  movieLocationsList: SFMoviesModel[] = [];

  geocode: any;
  constructor(
    private sfLocationService: SfLocationService,
    private sfGeocodeService: SfGeocodeService) {
  }


  ngOnInit() {
    // this.geocode = new google.maps.Geocoder();
    this.getLocationsList();
  }

  async getLocationsList() {
    this.movieLocationsList.length = 0;
    await this.sfLocationService.getLocations().subscribe((data: any) => {
      for (let loc in data['result']) {
          var location = new SFMoviesModel(data['result'][loc]);
          this.sfGeocodeService.geocodeAddress(location.locations).subscribe((loc: any) => {
            location.geoLocation = loc;
          });
          this.movieLocationsList.push(location);
          
      }
      // console.log('Locations', this.movieLocationsList);
    });
  }
}
