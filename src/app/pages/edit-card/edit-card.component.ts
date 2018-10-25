import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Card, CardName} from "../../interfaces/card";
import {delay, switchMap} from "rxjs/operators";
import {CardsService} from "../../services/cards.service";
import {error} from "util";
import {Observable} from "rxjs";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-card',
  templateUrl: './edit-card.component.html',
  styleUrls: ['./edit-card.component.scss']
})
export class EditCardComponent implements OnInit {
  card$: Card;
  id: number;
  card = this.fb.group({
    system: this.fb.group({
      id: ['',]
      , _id_: ['']
      , index: ['']
      , isActive: ['']
    })
    , user: this.fb.group({
      picture: [''],
      age: ['', [Validators.required]],
      name: this.fb.group({
        first: ['', [Validators.required]]
        , last: ['', [Validators.required]]
      }),
    })
    , contacts: this.fb.group({
      email: ['', [Validators.required, Validators.email]]
      , phone: ['',[Validators.required]]
      , address: ['']
    })
    , moreInfo: this.fb.group({
      about: ['']
      , tags: ['']
      , favoriteFruit: ['']
    })

  });

  constructor(
    private route: ActivatedRoute
    , private router: Router
    , private cardsService: CardsService
    , private fb: FormBuilder
  ) {}

  ngOnInit() {
    console.log('**', this.route);
    this.id = this.route.snapshot.params['id'];
    this.cardsService.getCard(this.id)
      .pipe(
        delay(500)
      )
      .subscribe(
        (res:Card) => {
          console.log('**', res);
          return this.card$ = res;
        }
        , error => console.warn('**', error)
        , ()=> {
          console.info('**complete');
          this.updateCard(this.card$)
        }
      );
  }

  updateCard(data) {
    this.card.patchValue({
      system: {
        id: data.id
        , _id_: data._id_
        , index: data.index
        , isActive: data.isActive
      }
      , user: {
        picture: data.picture
        , age: data.age
        , name: {
          first: data.name.first
          , last: data.name.last
        }
      }
      , contacts: {
        email: data.email
        , phone: data.phone
        , address: data.address
      }
      , moreInfo: {
        about: data.about
        , tags: data.tags
        , favoriteFruit: data.favoriteFruit
      }
    })
  }

  onSubmit() {
    const val = this.card.value;
    const newCardTags = typeof val.moreInfo.tags === 'string' ? val.moreInfo.tags.split(',') : val.moreInfo.tags;
    const newCard = {
      id: val.system.id
      , _id_: val.system._id_
      , index: val.system.index
      , isActive: val.system.isActive
      , picture: val.user.picture
      , age: val.user.age
      , name: {
        first: val.user.name.first
        , last: val.user.name.last
      }
      , email: val.contacts.email
      , phone: val.contacts.phone
      , address: val.contacts.address
      , about: val.moreInfo.about
      , tags: newCardTags
      , favoriteFruit: val.moreInfo.favoriteFruit
    };
    console.log('-- formCard', this.card);
    console.log('-- formCardValue', this.card.value);
    console.log('-- newCard ', newCard);

    this.cardsService.updateCard(newCard)
      .pipe(
        delay(500)
      )
      .subscribe(
        () => {
          console.log('** next', );
        }
        , error => console.warn( '** error = ', error)
        , ()=> {
          console.info('**complete');
        }
      );
  }
}
