import { AbstractControl } from '@angular/forms';

export class MyValidators {
    static isPriceValid (control: AbstractControl) {
        const value = control.value;
        console.log(value);
        if (value > 10000) {
            return {price_invalid: true}
        }
        return null;
    }

}

//valiando que el campo de precio no sea mayor a 10000