import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObjetDomotiqueComponent } from './objet-domotique/objet-domotique.component';
import { AddObjetDomotiqueComponent } from './add-objet-domotique/add-objet-domotique.component';
import { ServiceGestionDomotique } from './service/serviceGestionDomotique';
import { FormsModule } from '@angular/forms';
import { ShowErrorsComponent } from './show-errors/show-errors.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component'

@NgModule({
  declarations: [
    AppComponent,
    ObjetDomotiqueComponent,
    AddObjetDomotiqueComponent,
    ShowErrorsComponent,
    ButtonsComponent,
    SearchComponent,
    LoginComponent,
    HomeComponent,
    DetailComponent
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
