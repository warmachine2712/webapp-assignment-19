import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';
import { RouterModule, Routes } from '@angular/router';

const route : Routes = [
  {
    path:'',
    component:DetailsComponent
  }
]

@NgModule({
  declarations: [DetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ],
  exports:[DetailsComponent]
})
export class DetailsModule { }
