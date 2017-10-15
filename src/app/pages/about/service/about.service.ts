import { Injectable } from '@angular/core';

@Injectable()
export class AboutService {

    constructor() { }

    getSkills() {
        return [
            {
                img: 'lightbulb_idea.svg',
                title: 'Ideas',
                description: 'I‘m a creative guy with an entrepreneurial spirit. I love coming up with ideas and brainstorming with the team.'
            },
            {
                img: 'graphic_design.svg',
                title: 'UX / UI',
                description: 'With strong user empathy, I always take a user centric approach when designing new features and UI‘s.'
            },
            {
                img: 'laptop.svg',
                title: 'Develop',
                description: 'I love to code and bringing designs to life. I‘m a Front-end developer at heart, but happy to venture into the back.'
            }
        ];
    }

    getTechnologies() {
        return [
            { img: 'angular.png',    col: 'col-md-3', state: 'hidden' },
            { img: 'css3.png',       col: 'col-md-3', state: 'hidden' },
            { img: 'figma.png',      col: 'col-md-3', state: 'hidden' },
            { img: 'git.png',        col: 'col-md-3', state: 'hidden' },
            { img: 'github.png',     col: 'col-md-4', state: 'hidden' },
            { img: 'html5.png',      col: 'col-md-4', state: 'hidden' },
            { img: 'jasmine.png',    col: 'col-md-4', state: 'hidden' },
            { img: 'jenkins.png',    col: 'col-md-3', state: 'hidden' },
            { img: 'jquery.svg',     col: 'col-md-3', state: 'hidden' },
            { img: 'js.png',         col: 'col-md-3', state: 'hidden' },
            { img: 'karma.svg',      col: 'col-md-3', state: 'hidden' },
            { img: 'less.png',       col: 'col-md-4', state: 'hidden' },
            { img: 'node.png',       col: 'col-md-4', state: 'hidden' },
            { img: 'protractor.png', col: 'col-md-4', state: 'hidden' },
            { img: 'ruby.png',       col: 'col-md-3', state: 'hidden' },
            { img: 'sketch.svg',     col: 'col-md-3', state: 'hidden' },
            { img: 'trello.png',     col: 'col-md-3', state: 'hidden' },
            { img: 'express.png',    col: 'col-md-3', state: 'hidden' },
        ];
    }

}
