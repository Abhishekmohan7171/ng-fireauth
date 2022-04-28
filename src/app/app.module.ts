import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
// import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FirebaseService } from './services/firebase.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({

      apiKey: "AIzaSyDEivppgdGRNISHatota234epQvnivrQSg",
    
      authDomain: "auth-fire-6c706.firebaseapp.com",
    
      projectId: "auth-fire-6c706",
    
      storageBucket: "auth-fire-6c706.appspot.com",
    
      messagingSenderId: "871502854290",
    
      appId: "1:871502854290:web:3c005053bef361d5328e4b"
    
    }),
    
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
