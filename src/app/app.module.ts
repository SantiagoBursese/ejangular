import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImagenComponent } from './imagen/imagen.component';
import { TextoComponent } from './texto/texto.component';

@NgModule({
  declarations: [
    AppComponent,
    ImagenComponent,
    TextoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
