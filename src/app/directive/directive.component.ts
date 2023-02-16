import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {

  isAdmin: boolean = true; 

  hiddenElement(): void {
    this.isAdmin = !this.isAdmin;
  }

}
