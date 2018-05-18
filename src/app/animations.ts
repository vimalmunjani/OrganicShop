import { animate, transition, style, state, trigger } from '@angular/animations';

export let slide = trigger('slide', [
    transition(':enter', [
        style({
            transform: 'translateX(30px)'
        }),
        animate('1s ease-out')
    ]),
    transition(':leave', [
        animate('1s ease-in',
        style({
            transform: 'translateX(30px)'
        }))
    ])
]);
