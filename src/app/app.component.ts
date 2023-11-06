import { Component } from '@angular/core';
import { Character } from './character.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  people: Character[] = [
    new Character('Tutu', 30, 'shaman', [
      'Medicine',
      'Counseling',
      'Spell Casting',
    ]),
    new Character('Jimmy', 32, 'scout', ['Assassin', 'Outlaw', 'Subtlety']),
  ];
  pname: string = '';
}
