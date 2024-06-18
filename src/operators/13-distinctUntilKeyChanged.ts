import { distinct, distinctUntilChanged, from, of } from "rxjs";

const numeros$ = of(1,1,1,3,3,3,2,4,2,2,1,5,6);

numeros$.pipe(
    distinctUntilChanged()
)
.subscribe(console.log);

interface Personaje {
    nombre: string
}

const personajes: Personaje[] = [
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Zero'
    },
    {
        nombre: 'Dr. Willy'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Zero'
    },
];

from(personajes).pipe(
    distinctUntilChanged((ant, act) => ant.nombre === act.nombre)
)
.subscribe(console.log)