import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ConnexionComponent} from './connexion/connexion.component';
import {InscriptionComponent} from './inscription/inscription.component';
import {HotelsComponent} from './hotels/hotels.component';
import {MembresComponent} from './membres/membres.component';
import {HotelComponent} from './hotel/hotel.component';
import {AvisComponent} from './avis/avis.component';
import {GestionComponent} from './gestion/gestion.component';
import {MenuComponent} from './menu/menu.component';
import {OwnHotelsComponent} from './own-hotels/own-hotels.component';
import {AddHotelComponent} from './add-hotel/add-hotel.component';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuComponent,
  },
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
  },
  {
    path: 'own-hotels',
    component: OwnHotelsComponent,
  },
  {
    path: 'add-hotel',
    component: AddHotelComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
