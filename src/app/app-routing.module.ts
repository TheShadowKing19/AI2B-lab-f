import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ItemsComponent} from "./items/items.component";
import {UsersComponent} from "./users/users.component";
import {StartComponent} from "./start/start.component";
import {NotFoundComponent} from "./not-found/not-found.component";

const routes: Routes = [
  {path: 'items', component: ItemsComponent},
  {path: 'users', component: UsersComponent},
  {path: '', pathMatch: 'full', component: StartComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
