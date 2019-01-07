import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiGeocodService {

  constructor(private http: HttpClient) { }


  loadGeocod (): Observable<any[]> {
    const params = new HttpParams ()
        .set('api_key' , '8954c0415981ac8c51dc553750f47fc7e433c49')
        .set('q' , '1109 N Highland St, Arlington VA');

    return this.http.get<any[]>('https://api.geocod.io/v1.3/geocode?' , {params});
  }



}
