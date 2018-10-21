import {Component, Input, OnInit} from '@angular/core';
import {Card} from "../../interfaces/card";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() cards: Card[];

  constructor() { }

  ngOnInit() {
  }

}
