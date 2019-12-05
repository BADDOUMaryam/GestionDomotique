import { Component } from '@angular/core';
import { ServiceGestionDomotique } from './service/serviceGestionDomotique';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gestionDomotique';
  constructor(private serviceGestionDomotique:ServiceGestionDomotique) { }
  getAfficher(){
    return this.serviceGestionDomotique.etat;
  }


}
