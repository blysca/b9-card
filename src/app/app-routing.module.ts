import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from "./pages/main/main.component";
import {AddCardComponent} from "./pages/add-card/add-card.component";
import {DetailCardComponent} from "./pages/detail-card/detail-card.component";
import {EditCardComponent} from "./pages/edit-card/edit-card.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/list'}
  , {path: 'list', component: MainComponent}
  , {path: 'card', children:[
      {path: 'add', component: AddCardComponent}
      , {path: ':id', component: DetailCardComponent}
      , {path: ':id/edit', component: EditCardComponent}
    ]}
  , { path: '**', redirectTo: '/list'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
