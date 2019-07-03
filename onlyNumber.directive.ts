import { Directive, HostListener } from '@angular/core';

@Directive({
    selector: '[onlyNumber]'
})
export class OnlyNumberDirective {
    constructor() { }
    @HostListener('keypress', ['$event'])
    onKeyDown(event) {

        return /\d/.test(String.fromCharCode(event.keyCode));
    }
}
