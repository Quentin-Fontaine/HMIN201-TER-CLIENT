import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public user: Observable<string>;

  constructor(private authService: AuthService, private router: Router) {
    // this.user = this.authService.getUser();
  }

  ngOnInit(): void {
    this.router.navigate(['/hotels']);
  }

  // tslint:disable-next-line:typedef
  deconnexion() {
    this.authService.logout();
    this.router.navigate(['/hotels']);
  }

}
