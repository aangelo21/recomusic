import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Song {
  title: string;
  artist: string;
}

@Injectable({
  providedIn: 'root'
})
export class SongService {
  
  endpoint = "http://localhost:8080/api/songs"

  constructor(private httpClient: HttpClient) {}

  getSongs() {
    return this.httpClient.get(this.endpoint)
  }

  createSong(song: Song) {
    return this.httpClient.post(this.endpoint, song)
  }
}
