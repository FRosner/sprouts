import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from '@src/app/app-routing.module';
import {AppComponent} from '@src/app/app.component';
import {HomeComponent} from '@src/app/components/home/home.component';
import {GameComponent} from '@src/app/components/game/game.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {NgxFpTsModule} from 'ngx-fp-ts';
import {MatProgressSpinnerModule} from '@angular/material';

const firebaseConfig = {
  apiKey: 'AIzaSyBNRNNjzZlZihD9CjZHwf8V4tT2PWMY5-I',
  authDomain: 'stift-und-papier.firebaseapp.com',
  databaseURL: 'https://stift-und-papier.firebaseio.com',
  projectId: 'stift-und-papier',
  storageBucket: 'stift-und-papier.appspot.com',
  messagingSenderId: '436152985520',
  appId: '1:436152985520:web:29245f67f32864151c1875',
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GameComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    NgxFpTsModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
