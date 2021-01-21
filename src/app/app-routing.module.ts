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
      path: 'app',
      redirectTo: 'home',
      pathMatch: 'full'
      },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  { path: 'mis-holiday', loadChildren: './pages/recent-list/recent-list.module#RecentListPageModule'},
  { path: 'mis-holiday/:id', loadChildren: './pages/recent-details/recent-details.module#RecentDetailsPageModule' },
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
  {
    path: 'language-popover',
    loadChildren: () => import('./pages/language-popover/language-popover.module').then( m => m.LanguagePopoverPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./pages/account/account.module').then( m => m.AccountPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./pages/notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'dictionary',
    loadChildren: () => import ('./pages/dictionary/dictionary.module').then( m => m.DictionaryPageModule)
  },
  {
    path: 'test1',
    loadChildren: () => import('./pages/test1/test1.module').then( m => m.Test1PageModule)
  }
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
