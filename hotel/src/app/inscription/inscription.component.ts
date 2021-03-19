import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {
  public user = {pseudo: '', password: '', role: ''};
  public hotel = {name: '', adress: '', adressComplement: '', city: ''};
  public message = '';
  public showHideGerantParameters: boolean;

  constructor(private authService: AuthService, private router: Router) { }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.authService.verificationInscription(this.user).subscribe(reponse => {
      this.message = reponse.message;
      if (reponse.result) {
        this.authService.connect(this.user.pseudo);
        this.router.navigate(['/hotels']);
      }
    });
  }

  ngOnInit(): void {
  }

}
