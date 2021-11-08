import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {User} from "../model/user";
import {environment} from "../../../../environments/environment";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private isLoggedInSubject: BehaviorSubject<boolean>;
  private isLoggedAdmin: BehaviorSubject<boolean>;

  constructor(private http: HttpClient) {
    this.isLoggedInSubject = new BehaviorSubject<boolean>(false);
    this.isLoggedAdmin = new BehaviorSubject<boolean>(false);
  }


  updateUser(user: User): Observable<User> {
    //return this.http.put<User>(environment.apiURL + '/api/user/' + user.id, user).subscribe(
     //data => {
     //   console.log(data);
     //   return data;
     // },
     // error => console.log('oops', error)
    // );
    debugger
    console.log(user.id)
    return this.http.put<User>(environment.apiURL + '/api/user/' + user.id, user);
  }

  readUserById(id: number): Observable<User> {
    return this.http.get<User>(environment.apiURL + '/api/user/' + id);
  }

}
