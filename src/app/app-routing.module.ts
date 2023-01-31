import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import('src/core/components/movies-dashboard/movies-dashboard.module').then(x => x.MoviesDashboardModule)
  },
  {
    path: "details",
    loadChildren: () => import('src/core/components/details/details.module').then(x => x.DetailsModule)
  },
  {
    path: "movies-dashboard",
    loadChildren: () => import('src/core/components/movies-dashboard/movies-dashboard.module').then(x => x.MoviesDashboardModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
