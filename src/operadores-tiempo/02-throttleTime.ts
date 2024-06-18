import { asyncScheduler, fromEvent, map } from "rxjs";
import { distinctUntilChanged, first, pluck, throttleTime } from 'rxjs/operators';

const click$ = fromEvent(document, 'click');

click$.pipe(
    throttleTime(3000)
)//.subscribe(console.log)

// Ejemplo 2
const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent(input, 'keyup').pipe(
    throttleTime(2000, asyncScheduler, {
        leading: true, 
        trailing: true
    }),
    map( ev => ev?.target['value']),
    distinctUntilChanged()
).subscribe(console.log)