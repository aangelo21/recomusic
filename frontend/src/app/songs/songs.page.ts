import { Component, OnInit } from '@angular/core';
import { SongService } from '../services/song-service';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.page.html',
  styleUrls: ['./songs.page.scss'],
  standalone: false,
})
export class SongsPage implements OnInit {
  songs: any = [];

  constructor(private songService: SongService) {}

  ngOnInit() {
    this.getAllSongs();
  }

  getAllSongs() {
    this.songService.getSongs().subscribe((response) => {
      console.log('Response from API:', response);
      this.songs = response;
      console.log('Songs array after assignment:', this.songs);
    }, (error) => {
      console.error('Error fetching songs:', error);
    });
  }
}
