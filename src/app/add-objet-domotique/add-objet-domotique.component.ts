import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import { ServiceGestionDomotique } from '../service/serviceGestionDomotique';


@Component({
  selector: 'app-add-objet-domotique',
  templateUrl: './add-objet-domotique.component.html',
  styleUrls: ['./add-objet-domotique.component.css']
})
export class AddObjetDomotiqueComponent implements OnInit {

  constructor(private serviceGestionDomotique:ServiceGestionDomotique) { }

  ngOnInit() {
  }
onSubmit(form :NgForm){
  const nom=form.value['nom'];
const emplacement=form.value['emplacement'];

const status=form.value['status'];
this.serviceGestionDomotique.ajouterObjet(nom,emplacement);


}

}
