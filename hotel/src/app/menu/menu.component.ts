import {Component, OnDestroy, OnInit} from '@angular/core';
import {BehaviorSubject, Observable, of, Subject, Subscription} from 'rxjs';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  isAuth: BehaviorSubject<boolean> = this.auth.isAuth$;
  role: string;
  role$: BehaviorSubject<string> = this.auth.memberRole;

  constructor(private auth: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.router.navigate(['/hotels']);
    console.log(this.isAuth);
    console.log(this.role);
    console.log(this.role$);
  }

  onLogout(): void {
    this.auth.logout();
    this.router.navigate(['/hotels']);
    console.log(this.auth);
  }

}
