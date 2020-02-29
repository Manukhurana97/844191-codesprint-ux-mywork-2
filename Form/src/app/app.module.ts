import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {BsDropdownModule} from 'ngx-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    OrderFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
