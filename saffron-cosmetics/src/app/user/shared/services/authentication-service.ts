import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private isLoggedInSubject: BehaviorSubject<boolean>;
  private isLoggedAdmin: BehaviorSubject<boolean>;

  constructor(private http: HttpClient ) {
    this.isLoggedInSubject = new BehaviorSubject<boolean>(false);
    this.isLoggedAdmin = new BehaviorSubject<boolean>(false);
  }
  /**
   * Used to determine if the user logged in is without an Admin Status, referencing that they are a standard user.
   * As their ordinary status is false, it's gonna return true if they do login.
   */
  isLoggedIn(): Observable<boolean>  {
    if (this.getToken()){
      this.isLoggedInSubject.next(true);
    }
    return this.isLoggedInSubject;
  }
  /**
   * Used to determine if the user logged in is with an Admin Status, referencing that they are a Admin.
   * As their ordinary statys is false, it's gonna return true if they do login
   */
  isLogAdmin(): Observable<boolean>  {
    if (this.getIsAdmin()){
      this.isLoggedAdmin.next(true);
    }
    return this.isLoggedAdmin;
  }
  //Add Api Urls
  // login(username: string, password: string): Observable<boolean> {
  //   return this.http.post<any>(environment.apiURL + 'token', {username, password})
  //     .pipe(map(response => {
  //       const token = response.token;
  //       //login successful if there's a jwt token in the response.
  //       const decodedToken = jwt_decode(token);
  //       if (token){
  //         //Store username and jwt token in local storage to keep user logged in between page refreshes
  //         this.setUpStorage({decodedToken: decodedToken, response: response});
  //         this.isLoggedInSubject.next(true);
  //         this.isLoggedAdmin.next(true);
  //         window.location.reload();
  //         return true;
  //       } else{
  //         this.isLoggedInSubject.next(false);
  //         this.isLoggedAdmin.next(false);
  //         return false;
  //       }
  //     }));
  // }

  login(username: string, password: string): Observable<boolean>{
    return this.http.post<any>(environment.apiURL + '/api/token', {username, password})
      .pipe(map(response =>{
        const token = response && response.token;
        console.log(response);
        if(token){
          localStorage.setItem('currentUser', JSON.stringify({username: username, token: token }));
          return true;
        } else {
          return false;
        }
      }));
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
    this.logout(); // Delete existing user
    console.log(currentUser);
    localStorage.setItem('currentUser', currentUser);
  }


  getToken(): string {
    // @ts-ignore
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return currentUser && currentUser.token;
  }

  getUserName(): string {
    // @ts-ignore
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return currentUser && currentUser.username;
  }


  getIsAdmin(): string | null {
    const currentUser = JSON.parse(<string>localStorage.getItem('currentUser'));
    if (currentUser) {
      return currentUser && currentUser.IsAdmin;
    } else {
      return null;
    }
  }

  // logout(): void {
  //   // remove user from local storage to log user out
  //   this.isLoggedInSubject.next(false);
  //   this.isLoggedAdmin.next(false);
  //   localStorage.removeItem('currentUser');
  // }

  logout(): void{
    localStorage.removeItem('currentUser');
  }
}

