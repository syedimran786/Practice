import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PnfComponent } from './pnf/pnf.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { MmComponent } from './mm/mm.component';
import { CfComponent } from './cf/cf.component';
import { Icon1Component } from './icon1/icon1.component';
import { Icon2Component } from './icon2/icon2.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    PnfComponent,
    LoginComponent,
    MmComponent,
    CfComponent,
    Icon1Component,
    Icon2Component,
    DashboardComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
