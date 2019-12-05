import { Component, OnInit } from '@angular/core';
import {ServiceGestionDomotique } from '../service/serviceGestionDomotique';

@Component({
  selector: 'app-objet-domotique',
  templateUrl: './objet-domotique.component.html',
  styleUrls: ['./objet-domotique.component.css']
})
export class ObjetDomotiqueComponent implements OnInit {
  test:any[];
  constructor(private serviceGestionDomotique :ServiceGestionDomotique) { }

  ngOnInit() {
   
    this.test=this.serviceGestionDomotique.objets;
  }
id:string;
nomDobjet:string;
emplacementDobjet:string;
statutDobjet:boolean;
estConnecte:boolean;

btnValue:string;
  
allumer(id:number){
  this.serviceGestionDomotique.allumerUn(id);
  }
  eteindre(id:number){
    //console.log("hii");
    this.serviceGestionDomotique.eteindreUn(id);
  }
  connecter(id:number){
    this.serviceGestionDomotique.connecterUn(id);
  }
  deconnecter(id:number){
    this.serviceGestionDomotique.deconncterUn(id);
  }
  geterror(){
    //this.errors='Vérifier la Connexion des objets';
    //return this.serviceDomotique.valider;
  }

}
