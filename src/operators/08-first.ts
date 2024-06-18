import { first, fromEvent, map, take, tap } from "rxjs";

const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    tap<MouseEvent>(() => console.log('tap')),
    // map(event => ({
    //     clientY: event.clientY,
    //     clientX: event.clientX
    // })),
    map(({clientX, clientY}) => ({clientY,clientX})),
    first(event => event.clientY >= 150)
    // first<MouseEvent>(event => event.clientY >= 150)
)
.subscribe({
    next: val => console.log('next: ', val),
    complete: () => console.log('complete')
});