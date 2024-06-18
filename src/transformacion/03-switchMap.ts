import { Observable, debounceTime, fromEvent, map, mergeAll, mergeMap, pluck, switchMap } from "rxjs";
import { ajax } from "rxjs/ajax";
import { GithubUsers } from "../interfaces/github-users.interface";

// Referencias
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append(textInput, orderList);

// Helpers
const mostrarUsuarios = (usuarios: GithubUsers[]) => {
    console.log(usuarios);
    orderList.innerHTML = '';

    for(const usuario of usuarios) {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = usuario.avatar_url;

        const anchor = document.createElement("a");
        anchor.href = usuario.html_url;
        anchor.text = 'Ver pagina';
        anchor.target = '_blank';

        li.append(img);
        li.append(usuario.login + ' ');
        li.append(anchor)

        orderList.append(li)
    }
}

// Streams
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');

input$.pipe(
    debounceTime<KeyboardEvent>(500),
    map<KeyboardEvent, string>(eve => eve.target['value']),
    mergeMap<string, Observable<any>>(texto => ajax.getJSON(
            `https://api.github.com/search/users?q=${texto}`
        )
    ),
    map<any, GithubUsers[]>(eve => eve['items'])
)//.subscribe(mostrarUsuarios);

const url = 'https://httpbin.org/delay/1?arg=';

input$.pipe(
    map(a => a.target['value']),
    switchMap(texto => ajax.getJSON(url + texto))
).subscribe(console.log)