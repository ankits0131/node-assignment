import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { NgModel } from '@angular/forms';
import { routes } from './app.router';
import { HttpModule }   from '@angular/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { OnlineshopService } from './onlineshop.service';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    ProfileComponent,
    EditProfileComponent,
    WelcomeComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routes,
    HttpModule
  ],
  providers: [OnlineshopService],
  bootstrap: [AppComponent]
})
export class AppModule { }
