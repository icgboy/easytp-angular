import {Component, ElementRef, Inject} from "angular2/core";
import {bootstrap} from 'angular2/platform/browser';

@Component({
    selector: 'app',
    template: `
        <h1>{{name}}</h1>
    `
})
class easytp {
    constructor(@Inject(ElementRef) er) {
        console.log(er.nativeElement, er.internalElement);

        this.name = 'easytp-angular';
    }
}

bootstrap(easytp);