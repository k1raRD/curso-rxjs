import { catchError, fromEvent, map, mergeMap, of, tap } from "rxjs";
import { ajax } from "rxjs/ajax";

// Helper
const peticionHttpLogin = (userPass) => 
    ajax.post('https://reqres.in/api/login?delay=1', userPass)
    .pipe(
        map(resp => resp?.response['token']),
        catchError(err => of('xxx'))
    );

// creando un formulario
const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPass = document.createElement('input');
const btnSubmit = document.createElement('button');

// Confiuraciones
inputEmail.type = 'email';
inputEmail.name = 'email';
inputEmail.placeholder = 'Email';
inputEmail.value = 'eve.holt@reqres.in';

inputPass.type = 'password';
inputPass.name = 'password'
inputPass.placeholder = 'Password';
inputPass.value = 'cityslicka';

btnSubmit.innerHTML = 'Ingresar';
form.append(inputEmail, inputPass, btnSubmit);

document.querySelector('body').append(form);

// Streams
const submitForm$ = fromEvent<Event>(form, 'submit').pipe(
    tap(ev => ev.preventDefault()),
    map(ev => ({
        email: ev.target[0].value,
        password: ev.target[1].value
    })),
    mergeMap(peticionHttpLogin)
);

submitForm$.subscribe(token => {
    console.log(token)
})