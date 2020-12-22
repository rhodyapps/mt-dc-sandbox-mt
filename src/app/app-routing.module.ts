import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'introduction',
    pathMatch: 'full'
    },
    {
    path: 'introduction',
    loadChildren: () =>
    import('./pages/introduction/introduction.module').then( m =>
    m.IntroductionPageModule)
    },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'mis-holiday',
  //  loadChildren: () => import('./pages/mis-holiday/mis-holiday.module').then( m => m.MisHolidayPageModule)
  loadChildren: './pages/recent-list/recent-list.module#RecentListPageModule'
  },
  { path: 'recent', loadChildren: './pages/recent-list/recent-list.module#RecentListPageModule' },
  { path: 'recent-detail', loadChildren: './pages/recent-details/recent-details.module#RecentDetailsPageModule' },
  { path: 'recent/:id', loadChildren: './pages/recent-details/recent-details.module#RecentDetailsPageModule' },
  { path: 'search', loadChildren: './pages/search/search.module#SearchPageModule'},
  {
    path: 'recent-details',
    loadChildren: () => import('./pages/recent-details/recent-details.module').then( m => m.RecentDetailsPageModule)
  },
  {
    path: 'details',
    loadChildren: () => import('./pages/recent-details/recent-details.module').then( m => m.RecentDetailsPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./pages/search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'introduction',
    loadChildren: () => import('./pages/introduction/introduction.module').then( m => m.IntroductionPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'reset-pw',
    loadChildren: () => import('./pages/reset-pw/reset-pw.module').then( m => m.ResetPwPageModule)
  },
  /*{
    path: 'recent-list',
    loadChildren: () => import('./pages/recent-list/recent-list.module').then( m => m.RecentListPageModule)
  },
  {
    path: 'recent-details',
    loadChildren: () => import('./pages/recent-details/recent-details.module').then( m => m.RecentDetailsPageModule)
  },
  */

 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
