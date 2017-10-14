import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ComponentsModule } from '../components/components.module';

import { AboutComponent } from './about/about.component';

const routes: Routes = [
    { path: '', redirectTo: 'about', pathMatch: 'full' },
    { path: 'about', component: AboutComponent },
];

@NgModule({
    imports: [
        CommonModule,
        NgbModule,
        FormsModule,
        ComponentsModule,
        RouterModule.forChild(routes),
    ],
    providers: [
    ],
    declarations: [
        AboutComponent,
    ]
})
export class PagesModule { }
