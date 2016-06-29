import {Component} from '@angular/core';
import {MyComponentComponent} from "./my-component.component";

@Component({
    selector: 'app',
    template: `
        <h1>Angular 2 Boilerplate</h1>
        <p>Lorem</p>
        <my-component></my-component>
       
    `,
    directives: [
        MyComponentComponent
    ]
})

export class AppComponent {

}
