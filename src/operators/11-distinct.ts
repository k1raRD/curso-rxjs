import { distinct, from, of } from "rxjs";

const numeros$ = of(1,1,1,3,3,3,2,4,2,2,1,5,6);

numeros$.pipe(
    distinct()
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
        nombre: 'Zero'
    },
    {
        nombre: 'Dr. Willy'
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
    distinct(p => p.nombre)
)
.subscribe(console.log)