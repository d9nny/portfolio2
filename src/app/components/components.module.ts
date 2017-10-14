import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NavbarComponent } from './navbar/navbar.component';

const components = [
    NavbarComponent,
];

@NgModule({
    imports: [
        CommonModule,
        NgbModule,
        RouterModule,
    ],
    declarations: components,
    exports: components
})
export class ComponentsModule { }
