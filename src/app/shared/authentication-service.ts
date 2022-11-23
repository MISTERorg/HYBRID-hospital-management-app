import { Injectable, NgZone } from '@angular/core';
import * as auth from 'firebase/auth';
import { User } from './user';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {AngularFirestore,AngularFirestoreDocument, DocumentChangeAction, DocumentReference } from '@angular/fire/compat/firestore';
import { VaultService} from './vault.service';
import { AlertController, LoadingController} from '@ionic/angular';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  userData: any;

  constructor(
    public afStore: AngularFirestore,
    public ngFireAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone,
    private vaultService: VaultService,
    private loadingController: LoadingController,
    private alertContoller: AlertController,
  ) {
    this.ngFireAuth.authState.subscribe(async(user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    });
  }

  // Login in with email/password
  SignIn(email, password) {
    return this.ngFireAuth.signInWithEmailAndPassword(email, password);
  }

  // Register user with email/password
  RegisterUser(email, password) {
    return this.ngFireAuth.createUserWithEmailAndPassword(email, password);
  }

  // Email verification when new user register
  SendVerificationMail() {
    return this.ngFireAuth.currentUser.then((user) => {
      return user.sendEmailVerification().then(() => {
        this.router.navigate(['login']);
      });
    });
  }

  // Recover password
  PasswordRecover(passwordResetEmail) {
    return this.ngFireAuth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        this.showAlert('Password reset email has been sent','please check your inbox.');
        this.router.navigate(['verify-email']);
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  // Returns true when user is looged in
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null && user.emailVerified !== false ? true : false;
  }

  // Returns true when user's email is verified
  get isEmailVerified(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user.emailVerified !== false ? true : false;
  }

  // Sign in with Gmail
  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }

  // Auth providers
  AuthLogin(provider) {
    return this.ngFireAuth
      .signInWithPopup(provider)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['dashboard']);
        });
        this.SetUserData(result.user);
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  // Store user in localStorage
  SetUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afStore.doc( `users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    };
    return userRef.set(userData, {
      merge: true,
    });
  }

    // //CRUD operation methods------------------------------------------------------------------------------------------

    // getAllDocuments(collection: string): Observable<DocumentChangeAction<unknown>[]> {
    //   return this.afStore.collection(collection).snapshotChanges();
    // }
  
    // deleteDocument<T>(collectionName: string, docID: string): Promise<void> {
    //   return new Promise((resolve, reject) => {
    //     this.afStore
    //       .collection(collectionName)
    //       .doc(docID)
    //       .delete()
    //       .then(obj => {
    //         resolve(obj);
    //       })
    //       .catch((error: any) => {
    //         reject(error);
    //       });
    //   });
    // }
  
    // addDocument<T>(collectionName: string, dataObj: T): Promise<DocumentReference> {
    //   return new Promise((resolve, reject) => {
    //     this.afStore.collection(collectionName).add(dataObj)
    //       .then(obj => {
    //         resolve(obj);
    //       })
    //       .catch(error => {
    //         reject(error);
    //       });
    //   });
    // }
  
    // updateDocument<T>(collectionName: string, docID: string, dataObj: T): Promise<void> {
    //   return new Promise((resolve, reject) => {
    //     this.afStore
    //       .collection(collectionName)
    //       .doc(docID)
    //       .update(dataObj)
    //       .then(obj => {
    //         resolve(obj);
    //       })
    //       .catch(error => {
    //         reject(error);
    //       });
    //   });
    // }
  // Sign-out
  SignOut() {
    return this.ngFireAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.vaultService.clearVault();
      this.router.navigate(['login']);
    });
  }
  async showAlert(header,message){
    const alert = await this.alertContoller.create({
      header,
      message,
      buttons:['ok'],
    });
    await alert.present();
  }
}
