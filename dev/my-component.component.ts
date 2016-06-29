import {Component} from '@angular/core';

@Component({
    selector: 'my-component',
    template: `
        Hi, I'm {{name}}.
        <br>
        <span [class.is-awesome]="inputElement.value === 'yes'">Is it awesome?</span>
        <br>
        <input type="text" #inputElement (keyup)="0">
    `,
    styleUrls: [
        'src/css/mycomponent.scss'
    ]
})
export class MyComponentComponent {
    name = 'Jared';
}
