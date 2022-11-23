import { Injectable } from '@angular/core';
import { AngularFirestore } from'@angular/fire/compat/firestore';
import { switchMap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { FieldValue } from 'firebase/firestore';
import { User } from '../shared/user';
export interface Message {
  createdAt: FieldValue;
  id: string;
  from: string;
  msg: string;
  fromName: string;
  myMsg: boolean;
}
 



@Injectable({
  providedIn: 'root'
})
export class ChatService {
  currentUser: User = null;
 
  constructor( private afs: AngularFirestore) {
    
  }
 


 
  // TODO Chat functionality
  // Chat functionality
 
addChatMessage(msg) {
  return this.afs.collection('messages').add({
    msg: msg,
    from: this.currentUser.uid,
  });
}
 
getChatMessages() {
  let users = [];
  return this.getUsers().pipe(
    switchMap(res => {
      users = res;
      return this.afs.collection('messages', ref => ref.orderBy('createdAt')).valueChanges({ idField: 'id' }) as Observable<Message[]>;
    }),
    map(messages => {
      // Get the real name for each user
      for (let m of messages) {          
        m.fromName = this.getUserForMsg(m.from, users);
        m.myMsg = this.currentUser.uid === m.from;
      }        
      return messages
    })
  )
}
private getUsers() {
  return this.afs.collection('users').valueChanges({ idField: 'uid' }) as Observable<User[]>;
}
 
private getUserForMsg(msgFromId, users: User[]): string {    
  for (let usr of users) {
    if (usr.uid == msgFromId) {
      return usr.email;
    }
  }
  return 'Deleted';
}
}