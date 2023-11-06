import { Component, Input } from '@angular/core';
import { Character } from '../character.model';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  @Input() person!: Character;

  position: string = 'relative';
  left: string = '2';

  setClass: boolean = true;
  showStrengths: Boolean = false;

  multipleClassesOne = { setAlignment: true, changeColor: true };
  multipleClassesTwo = ['setAlignment', 'changeColor'];
  multipleClassesThree = 'setAlignment changeColor';

  constructor() {}
}
