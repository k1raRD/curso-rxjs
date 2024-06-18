import { from, fromEvent, range } from 'rxjs';
import { filter, map } from "rxjs/operators";

// range(1, 10).pipe(
//     filter(num => num % 2 == 0)
// ).subscribe(console.log);

range(20, 30).pipe(
    filter((num, index) => {
        console.log('index', index);
        return num % 2 == 0
    })
)//.subscribe(console.log);

interface Personaje {
    tipo: string;
    nombre: string;
}

const personajes: Personaje[] = [
    {
        tipo: 'heroe',
        nombre: 'batman'
    },
    {
        tipo: 'heroe',
        nombre: 'Robin'
    },
    {
        tipo: 'villano',
        nombre: 'joker'
    }
]

from(personajes).pipe(
    filter(p => p.tipo === 'heroe')
).subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    map(event => event.code),
    filter(code => code === 'Enter')
);

keyup$.subscribe(console.log);