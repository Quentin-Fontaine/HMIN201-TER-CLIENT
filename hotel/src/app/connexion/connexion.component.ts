import { Component, OnInit } from '@angular/core';
import {AuthService} from '../_services/auth.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private auth: AuthService,
              private router: Router) { }

  loginForm: FormGroup;
  errorMessage: string;

  onSubmit(): void {
    // this.authService.verificationConnexion(this.user).subscribe(reponse => {
    //   this.message = reponse.message;
    //   if (reponse.resultat) {
    //     this.authService.connect(this.user.pseudo);
    //     this.router.navigate(['/hotels']);
    //   }
    // });
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required]
    });
  }

  onLogin(): void {
    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;
    this.auth.login(email, password).then(
      () => {
        this.router.navigate(['/hotels']);
      }
    ).catch(
      (error) => {
        this.errorMessage = error.message;
      }
    );
  }

}
