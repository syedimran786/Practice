import { Icon2Component } from './icon2/icon2.component';
import { Icon1Component } from './icon1/icon1.component';
import { CfComponent } from './cf/cf.component';
import { MmComponent } from './mm/mm.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PnfComponent } from './pnf/pnf.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "mm", component: MmComponent },
  { path: "cf", component: CfComponent },
  { path: "icon1", component: Icon1Component },
  { path: "icon2", component: Icon2Component },
  { path: "login", component: LoginComponent },
  { path: "**", component: PnfComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:"enabled"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
