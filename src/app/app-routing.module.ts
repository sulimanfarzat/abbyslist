import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { paths } from './module/app-paths';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PathResolveService } from './services/path-resolve.service';
import { config } from 'rxjs';
import { AboutComponent } from './components/about/about.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AuthGuard } from './settings/guard/auth.guard';


/*const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: '/enter-leave' },
  { path: '', component: HomeComponent },
  // {path: '', component: ToolBarsComponent},
  // { path: '**', component: ToolBarsComponent }
  // { path: 'dashboard', component: DashboardComponent, canActivate: [AuthModule] },
];*/

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: paths.home
  },
  // { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule'},
  {
    path: paths.home,
    component: HomeComponent
  },
  {
    path: paths.about,
    component: AboutComponent,
    canActivate: [AuthGuard]
  },
  {
    path: paths.user_profile,
    component: UserProfileComponent
  },
  {
    path: '**',
    resolve: {
      path: PathResolveService
    },
    component: NotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false,
    // scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule],
  declarations: [

    ]
})
export class AppRoutingModule { }
