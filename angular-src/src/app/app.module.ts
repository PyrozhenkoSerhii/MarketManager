import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from "@angular/router";
import {HttpModule} from "@angular/http";
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { HomeComponent } from './component/home/home.component';
import { ProfileComponent } from './component/profile/profile.component';
import {FlashMessagesModule} from "angular2-flash-messages";

import {AuthGuard} from "./guards/auth.guard";
import { FormsModule } from '@angular/forms';
import {ValidateService} from "./services/validate.service";
import {AuthService} from "./services/auth.service";
import { MmCreationComponent } from './component/mm-creation/mm-creation.component';
import { StrategyComponent } from './component/strategy/strategy.component';
import {CreatorService} from "./services/creator.service";
import { ProjectManagerComponent } from './component/project-manager/project-manager.component';
import { StrategyManagerComponent } from './component/strategy-manager/strategy-manager.component';
import { AdminPageComponent } from './component/admin-page/admin-page.component';
import {AdminFuncService} from "./services/admin-func.service";
import {ChartsModule} from "ng2-charts";


const appRoutes: Routes = [
    {path:'',component:HomeComponent},
    {path:'register',component:RegisterComponent},
    {path:'login',component:LoginComponent},
    {path:'profile',component:ProfileComponent, canActivate:[AuthGuard]},
    {path:'create',component:MmCreationComponent, canActivate:[AuthGuard]},
    {path:'strategy',component:StrategyComponent, canActivate:[AuthGuard]},
    {path:'project-manager',component:ProjectManagerComponent},
    {path:'strategy-manager',component:StrategyManagerComponent},
    {path:'admin-page',component:AdminPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    MmCreationComponent,
    StrategyComponent,
    ProjectManagerComponent,
    StrategyManagerComponent,
    AdminPageComponent
  ],
  imports: [
      BrowserModule,
      RouterModule.forRoot(appRoutes),
      FormsModule,
      FlashMessagesModule,
      HttpModule,
      ChartsModule
  ],
  providers: [ValidateService, AuthService, AuthGuard, CreatorService, AdminFuncService],
  bootstrap: [AppComponent]
})
export class AppModule { }
