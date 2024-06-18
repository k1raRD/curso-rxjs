import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any> = {
    next: val => console.log('next: ', val),
    error: err => console.warn('error: ', err),
    complete: () => console.info('completado')
};

const intervalo = new Observable<number>(subs => {

    const intervalId = setInterval(() => subs.next(Math.random()), 1000);

    return () => {
        clearInterval(intervalId)
        console.log("Limpieza del setInterval");
    };
});

/**
 * 1- Casteo multiple
 * 2- Tambien es un observer
 * 3- Next, Error y complete
 */

const subject$ = new Subject();
const subscripcion =  intervalo.subscribe(subject$)

// const subs1 = intervalo.subscribe(rnd => console.log("subs: 1", rnd));
// const subs2 = intervalo.subscribe(rnd => console.log("subs: 2", rnd));

const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

setTimeout(() => {

    subject$.next(10);

    subject$.complete();

    subscripcion.unsubscribe();

}, 3500);