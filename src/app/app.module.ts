import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule, MdChipsModule, MdToolbarModule, MdIconModule} from '@angular/material';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';;
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LeagueListComponent } from './league-list/league-list.component';
import { LeagueDetailComponent } from './league-detail/league-detail.component';
import { AdvertisingComponent } from './advertising/advertising.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeagueListComponent,
    LeagueDetailComponent,
    AdvertisingComponent,
    FooterComponent,
    CarouselComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MdButtonModule, 
    MdCheckboxModule,
    MdChipsModule,
    MdToolbarModule,
    MdIconModule,
    RouterModule.forRoot([
      {path: 'league-list', component: LeagueListComponent},
      {path: 'league-detail', component: LeagueDetailComponent}
    ])
  ],
  exports: [
    MdButtonModule, 
    MdCheckboxModule,
    MdChipsModule,
    MdToolbarModule,
    MdIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
