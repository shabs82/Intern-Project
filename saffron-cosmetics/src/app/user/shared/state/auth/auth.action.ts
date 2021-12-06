import {User} from "../../model/user";
import {UserDto} from "../../dtos/user-dto";

export class LoginUser {
  static readonly type = '[Auth] Login';
  constructor(public username: string, public password: string) {}
}

export class SignUp {
  static readonly type = '[Auth] Sign up';
  constructor(public user: User) {}
}

export class Logout {
  static readonly type = '[Auth] Logout';
}

export class ResetPassword {
  static readonly type = '[AuthUser] Reset Password';
  constructor(public mailInput: UserDto) {

  }


}

export class LoginWithGoogle {
  static readonly type = '[AuthUser] LoginWithGoogle';
  constructor() {
  }
}
// export class SetUpStorage {
//   static readonly type = '[Auth] Setup Storage';
//
// }
