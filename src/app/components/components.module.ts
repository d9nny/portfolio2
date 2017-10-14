import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NavbarComponent } from './navbar/navbar.component';

import { NavbarService } from './navbar/navbar-service/navbar.service';

const components = [
    NavbarComponent,
];

@NgModule({
    imports: [
        CommonModule,
        NgbModule,
        RouterModule,
    ],
    providers: [
        NavbarService,
    ],
    declarations: components,
    exports: components
})
export class ComponentsModule { }
