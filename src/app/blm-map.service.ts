import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Location} from './location.mode';

@Injectable({
  providedIn: 'root'
})
export class BlmMapService {

  constructor(private http: HttpClient) { }

  getLocation(){
    return this.http.get<Location>('http://api.ipapi.com/api/check?access_key=dc3c71b823bbe9c2231225f4eea06429')
  }
}
