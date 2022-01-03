import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {User} from "../model/user";
import {environment} from "../../../../environments/environment";
import {AuthService} from "../state/auth/auth.service";
import {AuthenticationService} from "./authentication-service";
import {ChangePasswordDto} from "../../change-password/dtos/changePasswordDto";

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

  private currentUserId: string;
  private changePasswordDto: ChangePasswordDto;

  private isLoggedInSubject: BehaviorSubject<boolean>;
  private isLoggedAdmin: BehaviorSubject<boolean>;

  constructor(private http: HttpClient, private authService: AuthenticationService) {
    this.isLoggedInSubject = new BehaviorSubject<boolean>(false);
    this.isLoggedAdmin = new BehaviorSubject<boolean>(false);
  }


  updateUser(user: User): Observable<User> {
    return this.http.put<User>(environment.apiURL + '/api/user/' + user.id, user);
  }

  readUserById(id: number): Observable<User> {
    return this.http.get<User>(environment.apiURL + '/api/user/' + id);
  }

  changePassword(newPass: string) {
    this.currentUserId = this.authService.getUserID();
    this.changePasswordDto = {
      newPW: newPass
    }
    return this.http.put<any>(environment.apiURL + + '/api/user/updatePassword/' + this.currentUserId, this.changePasswordDto);
  }
}
