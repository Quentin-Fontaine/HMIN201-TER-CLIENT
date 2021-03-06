import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { MenuComponent } from './menu/menu.component';
import { HotelsComponent } from './hotels/hotels.component';
import { MembresComponent } from './membres/membres.component';
import { HotelComponent } from './hotel/hotel.component';
import { AvisComponent } from './avis/avis.component';
import { GestionComponent } from './gestion/gestion.component';
import { AddHotelComponent } from './add-hotel/add-hotel.component';

import { AuthService } from './_services/auth.service';
import { HotelService } from './_services/hotel.service';
import { MemberService } from './_services/member.service';
import { OwnHotelsComponent } from './own-hotels/own-hotels.component';

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
    GestionComponent,
    AddHotelComponent,
    OwnHotelsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    HotelService,
    MemberService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
