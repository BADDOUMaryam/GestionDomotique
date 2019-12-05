import { Component, OnInit } from '@angular/core';
import { ServiceGestionDomotique } from '../service/serviceGestionDomotique';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private routeActivee: ActivatedRoute,private monService:ServiceGestionDomotique) { }
  nom:string;
  status:boolean;
  emplacement:string;
  estConnecte:boolean;
  id:number;
  ngOnInit() {
    const idp = this.routeActivee.snapshot.params['id'];
    this.nom = this.monService.getObjet(+idp).nom;
    this.status = this.monService.getObjet(+idp).status;
    this.emplacement = this.monService.getObjet(+idp).emplacement;
    this.estConnecte=this.monService.getObjet(+idp).estConnecte;
    this.id=this.monService.getObjet(+idp).id;
  }
  allumer(id:number){
    this.monService.allumerUn(id);
    }
    connecter(id:number){
      this.monService.connecterUn(id);
    }
}
