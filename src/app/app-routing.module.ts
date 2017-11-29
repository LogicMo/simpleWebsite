import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { EmployeeresultComponent } from './employeeresult/employeeresult.component';
import { ShopComponent } from './shop/shop.component';
import { GalleryComponent } from './gallery/gallery.component';
import { UsersComponent } from './users/users.component';
import { FormsComponent } from './forms/forms.component';
import { RoutingComponent } from './routing/routing.component';

const _routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'employeelist', component: EmployeelistComponent },
    { path: 'employeelist/:id', component: EmployeeresultComponent },
    
    { path: 'shop', component: ShopComponent },
    { path: 'gallery', component: GalleryComponent },
    
    { path: 'users', component: UsersComponent },
    { path: 'forms', component: FormsComponent },
    { path: 'routing', component: RoutingComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(_routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }

export const _routingComponents = [ AboutComponent, ContactComponent, EmployeelistComponent, EmployeeresultComponent, ShopComponent, GalleryComponent, UsersComponent, FormsComponent, RoutingComponent ];