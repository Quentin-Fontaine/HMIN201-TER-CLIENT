import { Component, OnInit } from '@angular/core';
import { AuthService} from '../_services/auth.service';
import { Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {

  signupForm: FormGroup;
  loading = false;
  errorMessage: string;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private auth: AuthService) { }

  onSubmit(): void {
  }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      lastname: [null, Validators.required],
      firstname: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
      role: [null, Validators.required]
    });
  }

  onSignup(): void {
    this.loading = true;
    const lastname = this.signupForm.get('lastname').value;
    const firstname = this.signupForm.get('firstname').value;
    const email = this.signupForm.get('email').value;
    const password = this.signupForm.get('password').value;
    const role = this.signupForm.get('role').value;
    this.auth.createNewMember(lastname, firstname, email, password, role).then(
      () => {
        this.loading = false;
        this.router.navigate(['/hotels']);
      }
    ).catch(
      (error) => {
        this.loading = false;
        this.errorMessage = error.message;
      }
    );
  }

}
