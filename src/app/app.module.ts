import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SideBarComponent } from './home/side-bar/side-bar.component';
import { LayoutComponent } from './home/layout/layout.component';
import { FooterComponent } from './home/footer/footer.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import {RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import {RestService} from './rest.service';
import {HttpClientModule} from '@angular/common/http';
import {ErrorComponent} from './error/error.component';
import {FormsModule} from '@angular/forms';
import {AuthGuard} from './services/auth.guard';
import { ClientsComponent } from './home/clients/clients.component';
import {HeaderComponent} from './home/header/header.component';
import { RegisterComponent } from './home/register/register.component';
import { RecoverpassComponent } from './home/recoverpass/recoverpass.component';


const routes: Routes =
  [
    {path: '', component: LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'recoverpass',component:RecoverpassComponent},
    {path: 'home', component: HomeComponent,canActivate:[AuthGuard],
      children:[
        {path:'',component:LayoutComponent},
        {path:'clients',component:ClientsComponent},



      ]
    },
    {path: '**', component: ErrorComponent},



  ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SideBarComponent,
    LayoutComponent,
    FooterComponent,
    NavbarComponent,
    LoginComponent,
    ErrorComponent,
    ClientsComponent,
    HeaderComponent,
    RegisterComponent,
    RecoverpassComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
