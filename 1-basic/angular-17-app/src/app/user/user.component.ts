import { Component } from '@angular/core';
import { GamesComponent } from '../games/games.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [GamesComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  username = 'Ana';
  isLoggin = false; // this is a state
  favGame: String = '';

  greet() {
    console.log('hello');
  }

  onLogin() {
    this.isLoggin = true;
  }

  getFavorite(nameGame: String) {
    this.favGame = nameGame;
  }
}
