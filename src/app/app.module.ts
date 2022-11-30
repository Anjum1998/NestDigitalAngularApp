import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddHomeComponent } from './add-home/add-home.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AddContactusComponent } from './add-contactus/add-contactus.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddAboutusComponent } from './add-aboutus/add-aboutus.component';
import { AddGalleryComponent } from './add-gallery/add-gallery.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HttpClientModule } from '@angular/common/http';

const myRoute:Routes=[
  {
    path:"",
    component:AddHomeComponent
  },
  {
    path:"contact",
    component:AddContactusComponent
  },
  {
    path:"about",
    component:AddAboutusComponent
  },
  {
    path:"gallery",
    component:AddGalleryComponent
  },
  {
    path:"admin",
    component:AdminLoginComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    AddHomeComponent,
    AddContactusComponent,
    NavbarComponent,
    AddAboutusComponent,
    AddGalleryComponent,
    AdminLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
