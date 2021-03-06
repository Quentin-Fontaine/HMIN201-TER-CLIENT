import { Component, OnDestroy, OnInit } from '@angular/core';
import { Member } from '../_models/member.model';
import { Subscription } from 'rxjs';
import { MemberService } from '../_services/member.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-members',
  templateUrl: './membres.component.html',
  styleUrls: ['./membres.component.scss']
})
export class MembresComponent implements OnInit, OnDestroy {

  public members: Member[] = [];
  private memberSub: Subscription;

  constructor(private memberService: MemberService) { }

  ngOnInit(): void {
    this.memberSub = this.memberService.member$.subscribe(
      (members) => {
        this.members = members.sort((a, b) => {
          if (a.lastname < b.lastname) { return -1; }
          if (a.lastname > b.lastname) { return 1; }
          return 0;
        });
      }
    );
    this.memberService.getAllMembers();
  }

  ngOnDestroy(): void {
    this.memberSub.unsubscribe();
  }

}
