import { Component, OnInit } from '@angular/core';
import { ServiceGestionDomotique } from '../service/serviceGestionDomotique';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public serviceGestionDomotique:ServiceGestionDomotique) { }

  ngOnInit() {
  }


}
