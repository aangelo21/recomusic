import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
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
  editMode = false;
  newSong: Song = {
    title: '',
    artist: ''
  };
  currentSongId: any;

  constructor(
    private songService: SongService,
    private alertController: AlertController
  ) {}

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
    this.editMode = false;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.editMode = false;
    this.currentSongId = null;
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

  openEditModal(song: any) {
    this.editMode = true;
    this.currentSongId = song.id;
    this.newSong = {
      title: song.title,
      artist: song.artist
    };
    this.isModalOpen = true;
  }

  updateSong() {
    if (this.newSong.title && this.newSong.artist) {
      this.songService.updateSong(this.currentSongId, this.newSong).subscribe(() => {
        this.getAllSongs();
        this.closeModal();
      }, (error) => {
        console.error('Error updating song:', error);
      });
    }
  }

  async confirmDelete(song: any) {
    const alert = await this.alertController.create({
      header: 'Confirm Delete',
      message: `Are you sure you want to delete "${song.title}"?`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          role: 'destructive',
          handler: () => {
            this.deleteSong(song.id);
          }
        }
      ]
    });
    await alert.present();
  }

  deleteSong(id: number) {
    this.songService.deleteSong(id).subscribe(() => {
      this.getAllSongs();
    }, (error) => {
      console.error('Error deleting song:', error);
    });
  }
}
