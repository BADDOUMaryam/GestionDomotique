import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddObjetDomotiqueComponent } from './add-objet-domotique/add-objet-domotique.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'home',component:HomeComponent},

  {path: 'home/:id', component: DetailComponent},
  {path:'add',component:AddObjetDomotiqueComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
