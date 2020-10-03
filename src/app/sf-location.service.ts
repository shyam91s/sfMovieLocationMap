import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const headers = new HttpHeaders()
  .set('content-type', 'application/json');

@Injectable({
  providedIn: 'root'
})
export class SfLocationService {

  constructor(private httpClient: HttpClient) {}

  getLocations() {
    return this.httpClient.get(environment.apiUrl + '/sfmovies', {'headers': headers});
  }
}
