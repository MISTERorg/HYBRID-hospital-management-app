import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// old firebase tools
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
// environment
import { environment } from '../environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
// new firebase tools

// google firebase
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { provideMessaging,getMessaging } from '@angular/fire/messaging';
import { AngularFireAnalyticsModule } from "@angular/fire/compat/analytics";
import { providePerformance,getPerformance } from '@angular/fire/performance';
import { provideRemoteConfig,getRemoteConfig } from '@angular/fire/remote-config';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { NgChartsModule } from 'ng2-charts';
//finger print, encryption and face recognition
import { VaultService } from './shared/vault.service';
// chart
import { HighchartsChartModule } from "highcharts-angular";
//pdf maker
import{HttpClientModule} from '@angular/common/http'
import{FileOpener} from '@ionic-native/file-opener/ngx';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
// chat
// import { Chooser } from '@ionic-native/chooser/ngx';


const appInitFactory =
  (vaultService: VaultService): (() => Promise<void>) =>
  () =>
    vaultService.init(); 
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule, 
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)), provideAnalytics(() => getAnalytics()), provideAuth(() => getAuth()), provideDatabase(() => getDatabase()), provideFirestore(() => getFirestore()), provideFunctions(() => getFunctions()), provideMessaging(() => getMessaging()), providePerformance(() => getPerformance()), provideRemoteConfig(() => getRemoteConfig()), provideStorage(() => getStorage()),
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    HighchartsChartModule,
    AngularFireAnalyticsModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    NgChartsModule,
    BrowserAnimationsModule,

  ],
  providers: [{ provide: RouteReuseStrategy, 
    useClass: IonicRouteStrategy },
    ScreenTrackingService,UserTrackingService,
    { provide: APP_INITIALIZER,
      useFactory: appInitFactory,
      deps: [VaultService],
      multi: true,
    },
    FileOpener,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
