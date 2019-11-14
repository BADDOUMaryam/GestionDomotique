import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObjetDomotiqueComponent } from './objet-domotique/objet-domotique.component';
import { AddObjetDomotiqueComponent } from './add-objet-domotique/add-objet-domotique.component';
import { ServiceGestionDomotique } from './service/serviceGestionDomotique';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    ObjetDomotiqueComponent,
    AddObjetDomotiqueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ServiceGestionDomotique],
  bootstrap: [AppComponent]
})
export class AppModule { }
