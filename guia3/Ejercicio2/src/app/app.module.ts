import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GasolinaComponent } from './gasolina/gasolina.component';
//agregar modulo de formulario
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GasolinaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
