import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BreweryHttp } from '../models/http-models/brewery-http.interface';

@Injectable({
  providedIn: 'root'
})
export class BreweryService {
  breweriesUrl = `${environment.apiUrl}`

  constructor(private _http: HttpClient) { }

  getBreweries(): Observable<BreweryHttp> {
    return this._http.get<BreweryHttp>(this.breweriesUrl);
  }

  getBrewery(_id: string): Observable<any> {
    return this._http.get<BreweryHttp>(`${this.breweriesUrl}/${_id}`);
  }
}


