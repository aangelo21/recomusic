import { Component, OnInit } from '@angular/core';
import { SongService, Song } from '../services/song-service';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.page.html',
  styleUrls: ['./songs.page.scss'],
  standalone: false,
})
export class SongsPage implements OnInit {
  songs: any = [];
  isModalOpen = false;
  newSong: Song = {
    title: '',
    artist: ''
  };

  constructor(private songService: SongService) {}

  ngOnInit() {
    this.getAllSongs();
  }

  getAllSongs() {
    this.songService.getSongs().subscribe((response) => {
      this.songs = response;
    }, (error) => {
      console.error('Error fetching songs:', error);
    });
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.newSong = {
      title: '',
      artist: ''
    };
  }

  createSong() {
    if (this.newSong.title && this.newSong.artist) {
      this.songService.createSong(this.newSong).subscribe(() => {
        this.getAllSongs();
        this.closeModal();
      }, (error) => {
        console.error('Error creating song:', error);
      });
    }
  }
}
