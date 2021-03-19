import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {
  public user = {pseudo: '', password: ''};
  public message = '';

  constructor(private authService: AuthService, private router: Router) { }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.authService.verificationConnexion(this.user).subscribe(reponse => {
      this.message = reponse.message;
      if (reponse.resultat) {
        this.authService.connect(this.user.pseudo);
        this.router.navigate(['/hotels']);
      }
    });
  }

  ngOnInit(): void {
  }

}
