import { Component } from '@angular/core';

@Component({
  selector: 'app-raclette',
  templateUrl: './raclette.component.html',
  styleUrls: ['./raclette.component.css']
})
export class RacletteComponent {
  
  isThisIngredientVital: boolean = true;

  isGuestListDisplayed: boolean = false;

  songList: string[] = ["Alejandro", "Ne me quitte pas", "Le temps est bon", "coucou"];

}
