import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {AuthService} from '../_services/auth.service';
import {Router} from '@angular/router';
import {Opinion} from '../_models/opinion.model';
import {OpinionService} from '../_services/opinion.service';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.scss']
})
export class AvisComponent implements OnInit, OnDestroy {

  public opinions: Opinion[] = [];
  private opinionSub: Subscription;

  constructor(private opinionService: OpinionService,
              private auth: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.opinionSub = this.opinionService.opinion$.subscribe(
      (opinions) => {
        this.opinions = opinions;
      }
    );
    this.opinionService.getOwnOpinions(this.auth.memberId);
  }

  ngOnDestroy(): void {
    this.opinionSub.unsubscribe();
  }

}
