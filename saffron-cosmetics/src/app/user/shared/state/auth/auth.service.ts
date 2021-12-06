import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {environment} from "../../../../../environments/environment";
import {map} from "rxjs/operators";
import {User} from "../../model/user";

import jwt_decode from 'jwt-decode';
import {UserDto} from "../../dtos/user-dto";

import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import {AngularFireDatabase} from "@angular/fire/compat/database";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  changePasswordUrl = "http://localhost:4200/change-password/";

  constructor(private http: HttpClient, private afAuth: AngularFireAuth, private db: AngularFireDatabase ) {
  }


  async loginUser(username: string, password: string): Promise<any>{
   const response =  await this.http.post<any>(environment.apiURL + '/api/token', {username, password}).toPromise();
   //Decode token
    const decodedToken = jwt_decode(response.token);
    console.log(response);
    debugger
    if (response.token) {
      // @ts-ignore
      localStorage.setItem('currentUser', JSON.stringify({email: decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'], id: response.id}));
      // @ts-ignore
      if ('Administrator' === decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']) {
        // @ts-ignore
        return {id:response.id ,email: decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'],isAdmin:true, firstName: response.firstName, lastName: response.lastName, phoneNumber: response.phoneNumber, address: response.address, postCode: response.postCode, token: response.token} as User;
      } else {
        // @ts-ignore
        return {id:response.id,email: decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'],isAdmin:true, firstName: response.firstName,lastName: response.lastName, phoneNumber: response.phoneNumber, address: response.address, postCode: response.postCode, token: response.token} as User;
      }
    }

    //Default if token cannot be decoded
     return {id:response.id , firstName: response.username} as User;
  };

  async signUp(user: User): Promise<User>{
    //httpOptions.headers = httpOptions.headers.set('Authorization','Bearer' + this.getToken());
    return  await this.http.post<User>(environment.apiURL + '/api/user', user).toPromise();

  };




  setUpStorage({decodedToken, response}: { decodedToken: any, response: any }): void {
    let currentUser = null;
    if ( 'Administrator' === decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']){
      currentUser = JSON.stringify({
        username: decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'],
        IsAdmin: true,
        token: response.token
      });
    } else {
      currentUser = JSON.stringify({
        username: decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'],
        currentRole: decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'],
        token: response.token
      });
    }
    //this.logout(); // Delete existing user
    console.log(currentUser);
    localStorage.setItem('currentUser', currentUser);
  }



private async updateUserData(
  credentials: any,
  ): Promise<any> {

  const user = await this.afAuth.currentUser;

  // @ts-ignore
  const userId =  user.uid;
  const userIds = credentials.additionalUserInfo.profile.id;
  const email = credentials.additionalUserInfo.profile.email;
  const firstName = credentials.additionalUserInfo.profile.firstName;
  const lastName = credentials.additionalUserInfo.profile.lastName;
  const address = credentials.additionalUserInfo.profile.address;
  const postCode = credentials.additionalUserInfo.profile.postCode;
  const phoneNumber = credentials.additionalUserInfo.profile.phoneNumber;

  const newUser = {
    id:userIds,
    email:email,
    firstName:firstName,
    lastName:lastName,
    address:address,
    postCode:postCode,
    phoneNumber:phoneNumber
  } as User;
// Write the new post's data simultaneously in the posts list and the user's post list.
  await this.db.database.ref('/Users/' + userId).update(newUser).catch((error) => {throw new Error(error.message);});
  return newUser;
}


async loginGoogle(): Promise<any> {
  const credential = await this.afAuth
    .signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .catch((error) => {
      throw new Error(error.message);
    });
  return await this.updateUserData(credential);
}


async sendResetPassword(email: string): Promise<any> {
  return await this.afAuth
    .sendPasswordResetEmail(email)
    .then(() => {

    })
    .catch((error) => {
      throw new Error(error.message);
    });
}


}
