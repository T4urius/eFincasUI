import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContaPageComponent } from './conta/conta-page/conta-page.component';
import { ContaPageModule } from './conta/conta-page/conta-page.module';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData, DatePipe } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HistoricoPageComponent } from './historico/historico-page/historico-page.component';
import { MenuPageComponent } from './menu/menu-page/menu-page.component';
import { HistoricoPageModule } from './historico/historico-page/historico-page.module';
import { MenuPageModule } from './menu/menu-page/menu-page.module';
registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    ContaPageComponent,
    HistoricoPageComponent,
    MenuPageComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ContaPageModule,
    HistoricoPageModule,
    MenuPageModule,
    BrowserAnimationsModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "pt-BR" },
    DatePipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
