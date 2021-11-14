import {Action, Selector, State, StateContext} from "@ngxs/store";
import {User} from "../../model/user";
import {Injectable} from "@angular/core";
import {LoginUser, Logout, SignUp} from "./auth.action";
import {AuthService} from "./auth.service";

export class AuthStateModel {
  // @ts-ignore
  loggedInUser: User;
}

// @ts-ignore
@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    // @ts-ignore
    loggedInUser: '',
  }
})
@Injectable()
export class AuthState {

  constructor(    private authService: AuthService,) {
  }

  @Selector()
  static getUser(state: AuthStateModel): any {
    return state.loggedInUser;
  }

  @Action(LoginUser)
  loginUser({getState, setState}: StateContext<AuthStateModel>, {username,password}: LoginUser): any {
    return this.authService.loginUser(username,password).then((result) => {
      const state = getState();
      setState({
        ...state,
        loggedInUser: result,
      });
    });

  }

  @Action(SignUp)
  signUp({getState, setState}: StateContext<AuthStateModel>, {user}: SignUp): any {
    return this.authService.signUp(user).then((result) => {
      const state = getState();
      setState({
        ...state,
        loggedInUser: result,
      });
    });

  }

  @Action(Logout)
  logout({getState, setState}: StateContext<AuthStateModel>): any {

      const state = getState();
      setState({
        ...state,
        // @ts-ignore
        loggedInUser: undefined,
      });

  }
}
