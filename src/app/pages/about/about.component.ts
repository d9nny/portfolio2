import { Component, OnInit, HostListener, ElementRef, Renderer } from '@angular/core';

import { NavbarService } from '../../components/navbar/navbar-service/navbar.service';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.less']
})
export class AboutComponent implements OnInit {

    private innerHeight: number;
    private headerTexts = [
        'Hey, I‘m Dan!',
        'I‘m looking for a new opportunity.',
        'Somewhere with an exciting startup culture.',
        'With people who are innovative & creative.',
        'Let‘s help each other grow!'
    ];
    private headerTextsIndex = 0;
    private typewriterDisplay = '';
    private blinkingCursor = false;

    constructor(private navbarService: NavbarService) {}

    @HostListener('window:scroll', [])
        onWindowScroll() {
            (window.pageYOffset || document.documentElement.scrollTop) > this.innerHeight - 80 ?
                this.navbarService.sendNavbarState('solid') : this.navbarService.sendNavbarState('transparent');
        }

    typingCallback(that) {
        const totalLength = that.headerTexts[that.headerTextsIndex].length;
        const currentLength = that.typewriterDisplay.length;
        that.blinkingCursor = false;

        if (currentLength < totalLength) {
            setTimeout(() => {
                that.typewriterDisplay += that.headerTexts[that.headerTextsIndex][currentLength];
                that.typingCallback(that);
            }, 100);
        } else {
            that.blinkingCursor = true;
            if (that.headerTextsIndex !== that.headerTexts.length - 1) {
                setTimeout(() => {
                    that.typewriterDisplay = '';
                    that.headerTextsIndex += 1;
                    that.typingCallback(that);
                }, 3000);
            }
            return;
        }
    }

    ngOnInit() {
        this.innerHeight = window.innerHeight;
        this.typingCallback(this);
    }

}
