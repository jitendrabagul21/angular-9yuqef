import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { AppheaderComponent } from './appheader/appheader.component';
  
 

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,  AppheaderComponent  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
