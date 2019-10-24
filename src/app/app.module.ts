import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { NounsCardsComponent } from './component/nouns-cards/nouns-cards.component';
import { NounsListComponent } from './component/nouns-list/nouns-list.component';
import { NounFormComponent } from './component/noun-form/noun-form.component';
import { VerbsCardsComponent } from './component/verbs-cards/verbs-cards.component';
import { VerbsListComponent } from './component/verbs-list/verbs-list.component';
import { VerbFormComponent } from './component/verb-form/verb-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NounsCardsComponent,
    NounsListComponent,
    NounFormComponent,
    VerbsCardsComponent,
    VerbsListComponent,
    VerbFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
