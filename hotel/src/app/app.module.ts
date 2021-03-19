import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { MenuComponent } from './menu/menu.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AuthService} from './auth.service';
import { HotelsComponent } from './hotels/hotels.component';
import { MembresComponent } from './membres/membres.component';
import { HotelComponent } from './hotel/hotel.component';
import { AvisComponent } from './avis/avis.component';
import { GestionComponent } from './gestion/gestion.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    InscriptionComponent,
    MenuComponent,
    HotelsComponent,
    MembresComponent,
    HotelComponent,
    AvisComponent,
    GestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
