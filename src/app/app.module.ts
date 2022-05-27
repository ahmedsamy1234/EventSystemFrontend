import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RegistrationModule } from './registration/registration.module';
import {HttpClientModule} from '@angular/common/http';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { InstructorComponent } from './instructor/instructor.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    InstructorComponent,
    NavbarComponent
  ],
  imports: [FormsModule,
    BrowserModule,
    AppRoutingModule,
    RegistrationModule,
    HttpClientModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
}





)
export class AppModule { }
