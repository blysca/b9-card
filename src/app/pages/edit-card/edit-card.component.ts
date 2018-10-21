import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Card} from "../../interfaces/card";
import {switchMap} from "rxjs/operators";
import {CardsService} from "../../services/cards.service";
import {error} from "util";

@Component({
  selector: 'app-edit-card',
  templateUrl: './edit-card.component.html',
  styleUrls: ['./edit-card.component.scss']
})
export class EditCardComponent implements OnInit {
  card$: any;
  id: number;

  constructor(
    private route: ActivatedRoute
    , private router: Router
    , private cardsService: CardsService
  ) {
  }

  ngOnInit() {
    console.log('**', this.route);
    this.id = this.route.snapshot.params['id'];
    this.cardsService.getCard(this.id)
      .subscribe(
        res => {
          console.log('**', res);
          return this.card$ = res;
        }
        , error => console.warn('**', error)
        , ()=> console.info('**complete')
      );
    console.log();
   /* this.card$ = this.route.paramMap
      .pipe(
        switchMap(
          (params: ParamMap) => {
            this.id = +params.get('id');
            return this.cardsService.getCard(this.id);
          }
        )
      )*/
  }

}
