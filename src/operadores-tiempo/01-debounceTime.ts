import { debounceTime, fromEvent, map } from "rxjs";
import { distinctUntilChanged, first, pluck } from 'rxjs/operators';

const click$ = fromEvent(document, 'click');

click$.pipe(
    debounceTime(3000)
).subscribe(console.log)

// Ejemplo 2
const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent(input, 'keyup').pipe(
    debounceTime(1000),
    map( ev => ev?.target['value']),
    distinctUntilChanged()
);

input$.subscribe(console.log)