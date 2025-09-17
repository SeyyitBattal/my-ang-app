import { AbstractControl, ValidationErrors } from "@angular/forms";
import { ValidatorFn } from "@angular/forms";

//PARAMETRE ALMAYAN CUSTOM VALIDATOR (İlk harf büyük olmalı):
// export function BigFirstLetter(control: AbstractControl): ValidationErrors | 
// null {
//     const value = control.value;

//     const dizin: string[] = [];

//     for(let n=65; n<=90; n++)
//         dizin.push(String.fromCharCode(n));

//     if(dizin.indexOf(value[0])== -1){
//         return {FirstCapitalLetter: true}
// }
//     return null;
// }


// // PARAMETRE ALAN CUSTOM VALIDATOR (İlk üç harf büyük olmalı):
export function BigFirstLetter(count: number):  ValidatorFn {
    return(control: AbstractControl) : ValidationErrors | null =>{
        const value = control.value;
        const dizin: string[] = [];
        for (let i = 65; i <= 90; i++) 
            dizin.push(String.fromCharCode(i));

        let state: boolean = true;
        for (let j = 0; j < count; j++) 
            if(dizin.indexOf(value[j]) == -1){
                state = false;
                break;
            }

        if(!state)
            return {FirstCapitalLetter:true}

        return null;
    };
}