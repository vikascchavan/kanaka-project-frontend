import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { ForgetpassComponent} from './component/forgetpass/forgetpass.component';
import { WelcomeComponent} from './component/welcome/welcome.component';
import { SmartTableComponent } from './component/smart-table/smart-table.component';

const routes: Routes = [
  {
    path : 'login' , component : LoginComponent
  },
  {
    path : 'signup' , component : SignupComponent
  },
  { 
    path: '', redirectTo:"login", pathMatch:'full' 
  },
  {
    path : 'forgetpass' , component : ForgetpassComponent
  },
  {
    path : 'welcome' , component : WelcomeComponent
  },
  {
    path : 'smart-table' , component : SmartTableComponent
   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
