import {Action, Selector, State, StateContext} from "@ngxs/store";
import {User} from "../../model/user";
import {Injectable} from "@angular/core";
import {LoginUser, Logout, SignUp, UpdateUser} from "./auth.action";
import {AuthService} from "./auth.service";
import {UserService} from "../../services/user.service";


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

// const reducerKeys = ['users'];
// export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any>{
//   return localStorageSync({keys: reducerKeys})(reducer);
// }

@Injectable()
export class AuthState {

  constructor(    private authService: AuthService, private userService: UserService) {
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
  @Action(UpdateUser)
  updateUser({getState, setState}: StateContext<AuthStateModel>, {user}: UpdateUser): any {
    debugger;
    //Observable to promise
    return this.userService.updateUser(user).toPromise().then((result) => {
      // const state = getState();
      // setState({
      //   ...state,
      //   loggedInUser: result,
      const state = getState();
      console.log("Before updating state!")
      console.log(state);
      setState({
        ...state,
        // @ts-ignore
        loggedInUser: result,
      })
      console.log("After updating state!")
      console.log(state);

    // })


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
