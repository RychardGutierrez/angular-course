import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css',
})
export class GamesComponent {
  @Input() username = '';
  @Output() addFavoriteGameEvent = new EventEmitter<String>();

  favorite(name: string) {
    this.addFavoriteGameEvent.emit(name);
  }

  games = [
    { id: 1, name: 'Mario bross' },
    { id: 2, name: 'Tekken 4' },
    { id: 3, name: 'God of War' },
  ];
}
