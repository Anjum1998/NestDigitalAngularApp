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
import { EmpLoginComponent } from './emp-login/emp-login.component';
import { EmpRegisterComponent } from './emp-register/emp-register.component';
import { ViewCourseComponent } from './view-course/view-course.component';
import { ViewFriendsComponent } from './view-friends/view-friends.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { AddFriendComponent } from './add-friend/add-friend.component';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import { NavbarEmpComponent } from './navbar-emp/navbar-emp.component';

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
  },
  {
    path:"emp",
    component:EmpLoginComponent
  },
  {
    path:"register",
    component:EmpRegisterComponent
  },
  {
    path:"viewcourse",
    component:ViewCourseComponent
  },
  {
    path:"viewfriends",
    component:ViewFriendsComponent
  },
  {
    path:"addfriend",
    component:AddFriendComponent
  },
  {
    path:"addcourse",
    component:AddCourseComponent
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
    AdminLoginComponent,
    EmpLoginComponent,
    EmpRegisterComponent,
    ViewCourseComponent,
    ViewFriendsComponent,
    AddCourseComponent,
    AddFriendComponent,
    NavbarAdminComponent,
    NavbarEmpComponent
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
