import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SongService {
  
  endpoint = "http://localhost:8080/api/songs"

  constructor(private httpClient: HttpClient) {}

  getSongs() {
    return this.httpClient.get(this.endpoint)
  }
}
