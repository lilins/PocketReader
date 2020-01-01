import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children: [
      {
        path: 'articles',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../articles/articles.module').then(m => m.ArticlesPageModule)
          }
        ]
      },
      {
        path: 'favourites',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../favourites/favourites.module').then(m => m.FavouritesPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/home/articles',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home/articles',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeTabsRoutingModule {}