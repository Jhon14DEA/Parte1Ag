;
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage'
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcercadeComponent } from './pages/acercade/acercade.component';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { ListadoComponent } from './pages/listado/listado.component';
import {ColorPickerModule} from 'primeng/colorpicker';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AngularFireModule, FIREBASE_OPTIONS} from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
// import { FIREBASE_OPTIONS } from '@angular/fire/compat';

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";


@NgModule({
  declarations: [
    AppComponent,
    AcercadeComponent,
    ContactosComponent,
    ListadoComponent
  ],
  imports: [
    BrowserModule,    
    FormsModule,
    AppRoutingModule,
    ColorPickerModule,
    BrowserAnimationsModule,
    // provideFirebaseApp(() => initializeApp(environment.firebase)),
    // provideAuth(() => getAuth()),
    // provideFirestore(() => getFirestore()),
    // provideStorage(() => getStorage()),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,   
  
  ],
  providers: [
    {provide: FIREBASE_OPTIONS, useValue: environment.firebaseConfig  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
