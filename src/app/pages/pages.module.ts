import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ComponentsModule } from '../components/components.module';

import { AboutComponent } from './about/about.component';
import { AboutHeaderComponent } from './about/about-header/about-header.component';

import { AboutService } from './about/service/about.service';

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
        AboutService,
    ],
    declarations: [
        AboutComponent,
        AboutHeaderComponent,
    ]
})
export class PagesModule { }
