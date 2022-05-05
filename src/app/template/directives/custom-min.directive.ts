import { Directive, Input } from "@angular/core";
import { FormControl, NG_VALIDATORS, Validators } from "@angular/forms";

@Directive({
    selector: '[customMin][ngModel]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: CustomMinDirective,
        multi: true
    }]
})
export class CustomMinDirective implements Validators {

    @Input() minimum!: number;

    constructor() { }

    validate = (control: FormControl) => {
        return control.value < this.minimum ? { 'customMin': true } : null;
    }
}