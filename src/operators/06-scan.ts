import { from } from "rxjs";
import { map, reduce, scan, tap } from "rxjs/operators";


const numeros = [1,2,3,4,5];

// const totalAcumulador = (acc, curr) => {
//     return acc + curr;
// }

const totalAcumulador = (acc, curr) => acc + curr;

// Reduce
// from(numeros).pipe(
//     reduce(totalAcumulador, 0)
// )
// .subscribe(console.log);

// Scan
// from(numeros).pipe(
//     scan(totalAcumulador, 0)
// )
// .subscribe(console.log);

// Redux
interface Usuario {
    id?: string
    autenticado?: boolean
    token?: string
    edad?: number
}

const user: Usuario[] = [
    {id: 'Alex', autenticado: false, token: null},
    {id: 'Alex', autenticado: true, token: 'ABC'},
    {id: 'Alex', autenticado: true, token: 'ABC123'},
]

const state$ = from(user).pipe(
    scan<Usuario>( (acc, curr) => {
        return {...acc, ...curr}
    })
);

const id$ = state$.pipe(
    map(state => state.id)
);

id$.subscribe(console.log)