import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ConnexionComponent} from './connexion/connexion.component';
import {InscriptionComponent} from './inscription/inscription.component';
import {HotelsComponent} from './hotels/hotels.component';
import {MembresComponent} from './membres/membres.component';
import {HotelComponent} from './hotel/hotel.component';
import {AvisComponent} from './avis/avis.component';
import {GestionComponent} from './gestion/gestion.component';

const routes: Routes = [
  {
    path: 'membres/connexion',
    component: ConnexionComponent,
  },
  {
    path: 'membres/inscription',
    component: InscriptionComponent,
  },
  {
    path: 'hotels',
    component: HotelsComponent,
  },
  {
    path: 'membres',
    component: MembresComponent,
  },
  {
    path: 'hotel',
    component: HotelComponent,
  },
  {
    path: 'avis',
    component: AvisComponent,
  },
  {
    path: 'gestion',
    component: GestionComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
