import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddHomeComponent } from './add-home/add-home.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AddContactusComponent } from './add-contactus/add-contactus.component';

const myRoute:Routes=[
  {
    path:"",
    component:AddHomeComponent
  },
  {
    path:"contact",
    component:AddContactusComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    AddHomeComponent,
    AddContactusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
