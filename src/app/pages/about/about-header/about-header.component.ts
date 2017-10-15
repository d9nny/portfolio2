import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-about-header',
    templateUrl: './about-header.component.html',
    styleUrls: ['./about-header.component.less']
})
export class AboutHeaderComponent implements OnInit {

    private headerTexts = [
        'Dan Wheeler',
        'a UX/ UI designer',
        'a front-end developer',
        'Let‘s build something great!'
    ];
    private headerTextsIndex = 0;
    private lastHeaderText = false;
    private typewriterDisplay = '';
    private blinkingCursor = false;

    @Output() nextSection = new EventEmitter();

    constructor() { }

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
                }, 1500);
            } else {
                this.lastHeaderText = true;
            }
        }
    }

    emitNextSection(id) {
        this.nextSection.emit(id);
    }

    ngOnInit() {
        this.typingCallback(this);
    }

}
