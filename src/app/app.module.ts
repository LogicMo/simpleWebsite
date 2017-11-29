import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule, _routingComponents } from './app-routing.module';

import { NgxPaginationModule } from 'ngx-pagination';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar/navbar.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';
import { HomeComponent } from './home/home.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { EmployeeresultComponent } from './employeeresult/employeeresult.component';
import { ShopComponent } from './shop/shop.component';
import { GalleryComponent } from './gallery/gallery.component';

import { BaseService } from './services/base.service';
import { UsersComponent } from './users/users.component';
import { FormsComponent } from './forms/forms.component';
import { RoutingComponent } from './routing/routing.component';
import { TeacherlistComponent } from './teacherlist/teacherlist.component';
import { StudentlistComponent } from './studentlist/studentlist.component';

// import { AboutComponent } from './about/about.component';
// import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BodyComponent,
    FooterComponent,
    SliderComponent,
    
    _routingComponents,
    
    HomeComponent,    
    EmployeelistComponent,    
    EmployeeresultComponent,    
    ShopComponent,    
    GalleryComponent, UsersComponent, FormsComponent, RoutingComponent, TeacherlistComponent, StudentlistComponent  // Routing Components
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ],
  providers: [ BaseService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
