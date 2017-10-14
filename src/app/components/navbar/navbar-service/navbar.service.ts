import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class NavbarService {

    private navbarState: Subject<string> = new Subject<string>();

    constructor() { }

    sendNavbarState(state: string) {
        this.navbarState.next(state);
    }

    getNavbarState(): Observable<any> {
        return this.navbarState.asObservable();
    }


}
