import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {AuthService} from '../_services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public user: Observable<string>;

  constructor(private auth: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.router.navigate(['/hotels']);
    console.log(this.auth.isAuth$.getValue());
  }

  onLogout(): void {
    this.auth.logout();
    this.router.navigate(['/hotels']);
    console.log(this.auth);
  }

}
