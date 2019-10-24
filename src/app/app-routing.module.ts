import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { NounsCardsComponent } from './component/nouns-cards/nouns-cards.component';
import { NounFormComponent } from './component/noun-form/noun-form.component';
import { NounsListComponent } from './component/nouns-list/nouns-list.component';
import { VerbsCardsComponent } from './component/verbs-cards/verbs-cards.component';
import { VerbsListComponent } from './component/verbs-list/verbs-list.component';
import { VerbFormComponent } from './component/verb-form/verb-form.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'nouns-cards', component: NounsCardsComponent },
  { path: 'noun-form', component: NounFormComponent },
  { path: 'noun-form/:id', component: NounFormComponent },
  { path: 'nouns-list', component: NounsListComponent },
  { path: 'verbs-cards', component: VerbsCardsComponent },
  { path: 'verb-form', component: VerbFormComponent },
  { path: 'verb-form/:id', component: VerbFormComponent },
  { path: 'verbs-list', component: VerbsListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
