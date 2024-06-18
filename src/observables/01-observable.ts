import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: val => console.log('Siguiente [next]: ', val),
    error: err => console.warn('Completado: ', err),
    complete: () => console.info('Completado [obs]')
}

// const obs$ = Observable.create();
const obs$ = new Observable<string>(subscriber => {
    subscriber.next("Hola");
    subscriber.next("Mundo");

    subscriber.next("Hola");
    subscriber.next("Mundo");

    // Forzar un error
    // const a = undefined;
    // a.nombre = 'Alex';
    
    subscriber.complete();
    
    subscriber.next("Hola");
    subscriber.next("Mundo");
    
    subscriber.next("Hola");
    subscriber.next("Mundo");
});

// obs$.subscribe(observer);
// obs$.subscribe()

// obs$.subscribe({
//     next: valor => console.log('next:', valor),
//     error: err => console.error('error', err),
//     complete: () => console.warn('Completado')
// });