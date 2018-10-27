import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {CardsService} from "../../services/cards.service";
import {delay} from "rxjs/operators";

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss']
})
export class AddCardComponent implements OnInit {
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
    private cardsService: CardsService
    , private fb: FormBuilder
  ) { }

  ngOnInit() {
  }

  basicData() {
    this.card.patchValue({
      user: {
        picture: 'https://via.placeholder.com/150/FFFF00/000000'
        , age: 25
        , name: {
          first: 'Michelle'
          , last: 'Chen'
        }
      }
      , contacts: {
        email: 'michelle@mail.oreilly.com.cn'
        , phone: '+86 10-8809-7475'
        , address: `China
                    Suite 807, Building C, 
                    Cheng Ming Mansion, 
                    No.2 Xizhimen South Street,
                    Xicheng District, 
                    Beijing, 100035 PRC`
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

    this.cardsService.addCard(newCard)
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
