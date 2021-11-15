import {User} from "../../model/user";

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

export class NewPassword {
  static readonly type = '[Auth] New Password';
  constructor(public newPassword: string, public password: string) {}
}
