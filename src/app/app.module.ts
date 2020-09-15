import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { ForgetpassComponent } from './component/forgetpass/forgetpass.component';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { SmartTableComponent } from './component/smart-table/smart-table.component';
// import { Ng2CompleterModule } from "ng2-completer";
import { HttpClientModule } from '@angular/common/http';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ForgetpassComponent,
    WelcomeComponent,
    SmartTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    Ng2SmartTableModule,
    HttpClientModule
    // Ng2CompleterModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
