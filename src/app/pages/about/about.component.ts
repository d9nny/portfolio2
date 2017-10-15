import { Component, OnInit, HostListener, ElementRef, Renderer } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { AboutService } from './service/about.service';
import { NavbarService } from '../../components/navbar/service/navbar.service';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.less'],
    animations: [
        trigger('changeVisibility', [
            state('show' , style({
                opacity: 1,
                transform: 'scale(1)'
            })),
            state('hidden', style({
                opacity: 0,
                transform: 'scale(0)'
            })),
            transition('hidden => show', animate('500ms ease-in')),
        ])
    ]
})
export class AboutComponent implements OnInit {

    private innerHeight: number;
    private skills: object[];
    private technologies: object[];
    private techSectionOffset: number;
    private techIndex = 0;
    private techAnimationStarted = false;

    constructor(private navbarService: NavbarService,
                private aboutService: AboutService) {}

    @HostListener('window:scroll', [])
        onWindowScroll() {
            const topOffset = (window.pageYOffset || document.documentElement.scrollTop);

            topOffset > this.innerHeight - 80 ?
                this.navbarService.sendNavbarState('solid') : this.navbarService.sendNavbarState('transparent');

            if (!this.techAnimationStarted && topOffset > this.techSectionOffset) {
                this.techAnimationStarted = true;
                this.triggerTechAnimationCallback(this);
            }
        }

    nextSection(section) {
        const offset = document.getElementById(section).offsetTop - 40;
        window.scroll({top: offset, behavior: 'smooth'});
    }

    triggerTechAnimationCallback(that) {
        setTimeout(() => {
            that.technologies[that.techIndex].state = 'show';
            that.techIndex += 1;
            if (that.techIndex !== that.technologies.length) {
                that.triggerTechAnimationCallback(that);
            }
        }, 200);
    }

    ngOnInit() {
        this.skills = this.aboutService.getSkills();
        this.technologies = this.aboutService.getTechnologies();
        this.innerHeight = window.innerHeight;
        this.techSectionOffset = document.getElementById('technologies-section').offsetTop - 100;
    }

}
