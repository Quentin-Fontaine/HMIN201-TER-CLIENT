import {Component, OnDestroy, OnInit} from '@angular/core';
import {OpinionService} from '../_services/opinion.service';
import {Subscription} from 'rxjs';
import {Opinion} from '../_models/opinion.model';
import {Router} from '@angular/router';
import {colors} from '@angular/cli/utilities/color';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss']
})
export class GestionComponent implements OnInit, OnDestroy {

  public opinions: Opinion[] = [];
  private opinionSub: Subscription;

  errorMessage: string;

  constructor(private opinionService: OpinionService,
              private router: Router) { }

  ngOnInit(): void {
    this.opinionSub = this.opinionService.opinion$.subscribe(
      (opinions) => {
        this.opinions = opinions;
      }
    );
    this.opinionService.getNotValidatedOpinions();
  }

  ngOnDestroy(): void {
    this.opinionSub.unsubscribe();
  }

  valideOpinion(opinion: Opinion) {
    opinion.isValidated = true;
    this.opinionService.modifyOpinion(opinion._id, opinion)
      .then(() => {
          this.refreshGestion();
          console.log('Opinion validated !');
        }
      )
      .catch(
        (error) => {
          this.errorMessage = error.message;
        }
      );
  }

  deleteOpinion(opinion: Opinion) {
    this.opinionService.deleteOpinion(opinion._id)
      .then(() => {
        this.refreshGestion();
        console.log('Opinion validated !');
      })
      .catch((error) => {
        this.errorMessage = error.message;
      });
  }

  refreshGestion(): void {
    this.router.navigateByUrl('/', { skipLocationChange: true })
      .then(() => {
        this.router.navigate(['/gestion'])
          .then(() => {
            console.log('Opinion : refresh success !');
          })
          .catch((error) => {
            this.errorMessage = error.message;
            }
          );
      });
  }
}
