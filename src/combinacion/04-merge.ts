import { fromEvent, map, merge } from "rxjs";

const keyUp$ = fromEvent(document, 'keyup');
const click$ = fromEvent(document, 'click');

merge(
    keyUp$.pipe(map(a => a.type)), 
    click$.pipe(map(a => a.type)))
.subscribe(console.log)