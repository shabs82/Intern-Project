import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {environment} from "../../../../../environments/environment";
import {map} from "rxjs/operators";
import {User} from "../../model/user";

import jwt_decode from 'jwt-decode';

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

  constructor(private http: HttpClient ) {
  }


  async loginUser(username: string, password: string): Promise<any>{
   const response =  await this.http.post<any>(environment.apiURL + '/api/token', {username, password}).toPromise();
   //Decode token
    const decodedToken = jwt_decode(response.token);
    console.log(response);
    // debugger
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
     return {id:response.id , firstName: response.username,token: response.token} as User;
  };

  async signUp(user: User): Promise<User>{
    //httpOptions.headers = httpOptions.headers.set('Authorization','Bearer' + this.getToken());
    return  await this.http.post<User>(environment.apiURL + '/api/user', user).toPromise();

  };


  logout(): void{
    localStorage.removeItem('currentUser');
  }

  readUserById(id: number): Observable<User> {
    return this.http.get<User>(environment.apiURL + '/api/user' + id);
  }


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

}
