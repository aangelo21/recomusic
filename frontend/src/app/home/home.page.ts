import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  constructor(public navCtrl: NavController) {}

  goToSongs() {
    this.navCtrl.navigateForward('/songs');
  }
}
