import { combineLatest, fromEvent, map, merge } from "rxjs";

// const keyUp$ = fromEvent(document, 'keyup');
// const click$ = fromEvent(document, 'click');

// combineLatest(
//     keyUp$.pipe(map(a => a.type)), 
//     click$.pipe(map(a => a.type)))
// .subscribe(console.log)

const input1 = document.createElement('input');
const input2 = document.createElement('input');

input1.placeholder = 'email@gmail.com';
input2.placeholder = '***********';
input2.type = 'password';

document.querySelector('body').append(input1, input2);

// Helper
const getInputStream = (elem: HTMLElement) => {
    return fromEvent<KeyboardEvent>(elem, 'keyup').pipe(
        map<KeyboardEvent, string>(a => a.target['value'])
    )
}
 
combineLatest(
    getInputStream(input1),
    getInputStream(input2)
).subscribe(console.log)