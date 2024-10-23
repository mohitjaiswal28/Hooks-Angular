import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleComponent } from './component/sample/sample.component';



@NgModule({
  declarations: [
    SampleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SampleComponent
  ]
})
export class SharedModule { }
