import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})

export class HomeComponent {

  data = 'mohit';

  // 1. When a new instance of a class is created.
  constructor() {
    console.log('HomeComponent constructor');
  }

  // 2. Runs after Angular has initialized all the component inputs with their initial values,
  // happens before the component’s template is initialized
  ngOnInit() {
    console.log('HomeComponent ngOnInit');
  }

  // 9. Called when Angular sets or resets data-bound input properties.
  ngOnDestroy(): void {
    console.log('HomeComponent ngOnDestroy');
  }
}
