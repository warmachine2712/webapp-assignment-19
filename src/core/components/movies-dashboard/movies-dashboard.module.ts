import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesDashboardComponent } from './movies-dashboard.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { MovieCardModule } from '../movie-card/movie-card.module';

const route: Routes = [
  {
    path: '',
    component: MoviesDashboardComponent
  }
]

@NgModule({
  declarations: [MoviesDashboardComponent],
  imports: [
    CommonModule,
    MovieCardModule,
    RouterModule.forChild(route)
  ],
  exports: [MoviesDashboardComponent]
})
export class MoviesDashboardModule { }
