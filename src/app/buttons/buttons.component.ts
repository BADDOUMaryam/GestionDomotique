import { Component, OnInit } from '@angular/core';
import { ServiceGestionDomotique } from '../service/serviceGestionDomotique';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  constructor(private serviceGestionDomotique:ServiceGestionDomotique) { }

  ngOnInit() {
  }
  allumerTout(){
    //console.log("hiiii");
    this.serviceGestionDomotique.allumerTout();
  }
  eteindreTout(){
    this.serviceGestionDomotique.eteindreTout();
  }
  connecterTout(){
    this.serviceGestionDomotique.connecterTout();
  }
  deconnecterTout(){
    this.serviceGestionDomotique.deconnecterTout();
    
  }
  
  add(){
    this.serviceGestionDomotique.afficher();

  }
}
