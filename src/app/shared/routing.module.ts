import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {HomeComponent} from '../home/home.component';
import {ContactComponent} from '../contact/contact.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '' , component: HomeComponent},
            { path: 'contact' , component: ContactComponent }
        ])    
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}