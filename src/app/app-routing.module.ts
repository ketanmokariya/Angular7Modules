import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginLayoutComponent} from './shared/layout/login-layout/login-layout.component'

const routes: Routes = [
  {
    path: "auth",
    component: LoginLayoutComponent,
    loadChildren: "./modules/auth/auth.module#AuthModule"
  },
  { path: "**", redirectTo: "miscellaneous/error404" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
