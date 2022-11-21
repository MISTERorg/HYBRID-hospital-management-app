import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import{
  redirectUnauthorizedTo,
  redirectLoggedInTo,
  canActivate,
} from '@angular/fire/auth-guard';
const redirectUnauthorizedToLogin =() => redirectUnauthorizedTo(['login']);
const redirectUnauthorizedTosignup =() => redirectUnauthorizedTo(['sinup-info']);
const redirectLoggedInToHome =()  => redirectLoggedInTo(['index']);  

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'registration',
    loadChildren: () => import('./REGISTER/registration/registration.module').then( m => m.RegistrationPageModule)

  },
  {
    path: 'verify-email',
    loadChildren: () => import('./REGISTER/verify-email/verify-email.module').then( m => m.VerifyEmailPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./REGISTER/login/login.module').then( m => m.LoginPageModule)

  },
  {
    path: 'dashboard',
    loadChildren: () => import('./REGISTER/dashboard/dashboard.module').then( m => m.DashboardPageModule)

  },
  {
    path: 'password-reset',
    loadChildren: () => import('./REGISTER/password-reset/password-reset.module').then( m => m.PasswordResetPageModule)

  },
  
  {
    path: 'loader',
    loadChildren: () => import('./pages/loader/loader.module').then( m => m.LoaderPageModule)

  },
  {
    path: 'index',
    loadChildren: () => import('./pages/index/index.module').then( m => m.IndexPageModule)

  },

  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
    ,...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'my-modal',
    loadChildren: () => import('./pages/my-modal/my-modal.module').then( m => m.MyModalPageModule)
    ,...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'my-popover',
    loadChildren: () => import('./pages/my-popover/my-popover.module').then( m => m.MyPopoverPageModule)
    ,...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'biometrics',
    loadChildren: () => import('./features/biometrics/biometrics.module').then( m => m.BiometricsPageModule)
  },
  {
    path: 'admin-home',
    loadChildren: () => import('./admin/admin-home/admin-home.module').then( m => m.AdminHomePageModule)
  },

  {
    path: 'video-conf',
    loadChildren: () => import('./features/video-conf/video-conf.module').then( m => m.VideoConfPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./doctor/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'doc-home',
    loadChildren: () => import('./doctor/doc-home/doc-home.module').then( m => m.DocHomePageModule)
  },
  {
    path: 'acc-home',
    loadChildren: () => import('./accountant/acc-home/acc-home.module').then( m => m.AccHomePageModule)
  },
  {
    path: 'medical-report',
    loadChildren: () => import('./features/medical-report/medical-report.module').then( m => m.MedicalReportPageModule)
  },
  {
    path: 'chart',
    loadChildren: () => import('./features/chart/chart.module').then( m => m.ChartPageModule)
  },
  {
    path: 'blocked-users',
    loadChildren: () => import('./features/blocked-users/blocked-users.module').then( m => m.BlockedUsersPageModule)
  },
  {
    path: 'chat-view',
    loadChildren: () => import('./features/chat-view/chat-view.module').then( m => m.ChatViewPageModule)
  },
  {
    path: 'groupchat-view',
    loadChildren: () => import('./features/groupchat-view/groupchat-view.module').then( m => m.GroupchatViewPageModule)
  },
  {
    path: 'loginchat',
    loadChildren: () => import('./features/login/login.module').then( m => m.LoginPageModule)
  },

  {
    path: 'tabs',
    loadChildren: () => import('./features/pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'contact-details',
    loadChildren: () => import('./pages/contact-details/contact-details.module').then( m => m.ContactDetailsPageModule)
  },
  {
    path: 'crudhome',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
 
  {
    path: 'update-contact',
    loadChildren: () => import('./pages/update-contact/update-contact.module').then( m => m.UpdateContactPageModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./features/map/map.module').then( m => m.MapPageModule)
  },







];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
