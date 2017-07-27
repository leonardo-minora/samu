import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { DadosComponent } from './dados/dados.component';

import { DadosBrutoService } from './services/dados-bruto.service';

import { AppRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    DadosComponent
  ],
  imports: [
      AppRoutingModule,
      BrowserModule,
      FormsModule,
      HttpModule,
  ],
  providers: [DadosBrutoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
