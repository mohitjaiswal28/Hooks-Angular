# Component Lifecycle or Hooks in Angular 🚀

In Angular, a component's lifecycle is the sequence of steps between its creation and destruction. In your component, you can implement lifecycle hooks to run code during these steps.

## Angular Hooks 🔥

### 1. Constructor

In Angular, the constructor is called before any lifecycle hooks and is used to initialize the component's properties and inject dependencies.

```typescript
constructor() {
    console.log('HomeComponent constructor');
  }
```

### 2. ngOnChanges

This is called whenever an input property of a component changes. If your component uses @Input() to receive data from its parent, this is the hook that will get triggered whenever the data changes.

```typescript
  @Input() title!: string;

  ngOnChanges(changes: SimpleChanges) {
    console.log('SampleComponent ngOnChanges');
    console.log(changes['title']);
  }
```

### 3. ngOnInit

Runs after Angular has initialized all the component inputs with their initial values, happens before the component's template is initialized.

```typescript
  ngOnInit() {
    console.log('HomeComponent ngOnInit');
  }
```

### 4. ngDoCheck

Allows you to implement custom change detection logic. This method is called with every change detection cycle, which makes it powerful but also expensive in terms of performance if misused.

```typescript
  ngDoCheck(): void {
    if (this.title == 'jaiswal') {
      console.log('SampleComponent ngDoCheck');
    }
  }
```

### 5. ngAfterViewInit

This is called after Angular fully initializes the component's view, including child views.

```html
<p #paragraph>sample works!</p>
```

```typescript
 @ViewChild('paragraph') para!: ElementRef;


 ngAfterViewChecked(): void {
    console.log('SampleComponent ngAfterViewChecked', this.para);
  }
```

### 6. ngAfterViewChecked

This is called after each change detection cycle for the component's view.

```typescript
  ngAfterViewChecked(): void {
    console.log('SampleComponent ngAfterViewChecked', this.para);
  }
```

### 7. ngAfterContentInit

This is called after Angular projects external content into the component (using <ng-content>).

```typescript
  ngAfterContentInit(): void {
    console.log('SampleComponent ngAfterContentInit');
  }
```

### 8. ngAfterContentChecked

This is called after each change detection cycle when content has been checked.

```typescript
  ngAfterContentChecked(): void {
    console.log('SampleComponent ngAfterContentChecked');
  }
```

### 9. ngOnDestroy

This is called just before the component is removed from the DOM. It's the place to clean up resources, like unsubscribing from observables or detaching event handlers, to avoid memory leaks.

```typescript
  ngOnDestroy(): void {
    console.log('HomeComponent ngOnDestroy');
  }
```

# How to Clone and Run this Project 🖥️

1. Clone the repository:

```
git clone https://github.com/mohitjaiswal28/Hooks-Angular.git
```

2. Navigate to the project directory:

```
cd Hooks-Angular
```

3. Install the dependencies:

```
npm install
```

4. Run the application:

```
ng serve
```
