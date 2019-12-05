import { Component, OnInit } from '@angular/core';
import { ServiceGestionDomotique } from '../service/serviceGestionDomotique';

@Component({
  selector: 'app-show-errors',
  templateUrl: './show-errors.component.html',
  styleUrls: ['./show-errors.component.css']
})
export class ShowErrorsComponent implements OnInit {
 v:boolean=false;
  constructor(private serviceDomotique:ServiceGestionDomotique) { }
  errors:string;
  ngOnInit() {
this.v=this.serviceDomotique.valider
  }



    geterror(){
      this.errors='Vérifier la Connexion des objets';
      return this.serviceDomotique.valider;
    }
  
  }




