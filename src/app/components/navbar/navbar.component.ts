import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';


import { NavbarService } from './navbar-service/navbar.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {

    subscription: Subscription;
    navbarState: string;

    constructor(private navbarService: NavbarService) {
        this.subscription = this.navbarService.getNavbarState().subscribe(state => { this.navbarState = state; });
    }

    ngOnInit() {
        const path = window.location.pathname;
        (path.includes('about') || path.length <= 1) ? this.navbarState = 'transparent' : this.navbarState = 'solid';
    }

}
