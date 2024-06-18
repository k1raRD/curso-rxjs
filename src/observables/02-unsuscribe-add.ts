import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: val => console.log('next: ', val),
    error: err => console.warn('error: ', err),
    complete: () => console.info('completado')
};

const intervalo$ = new Observable<number>( subscriber => {
    // Crear un contador, 1, 2, 3, 4, 5
    let count = 0;
    const interval  = setInterval(() => {
        // Cada segundo
        count++;
        subscriber.next(count);
    }, 1000);

    setTimeout(() => {
        subscriber.complete()
    }, 2500)

    return () => {
        clearInterval(interval);
        console.log("Interval destruido");
    }
});

const subsCription1 = intervalo$.subscribe(num => console.log('Num:', num));
const subsCription2 = intervalo$.subscribe(num => console.log('Num:', num));
const subsCription3 = intervalo$.subscribe(num => console.log('Num:', num));

subsCription1
    .add(subsCription2.add(subsCription3))

setTimeout(() => {
    subsCription1.unsubscribe();
    // subsCription1.unsubscribe();
    // subsCription2.unsubscribe()
    // subsCription3.unsubscribe()
}, 3000)