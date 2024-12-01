export interface ILogin {
  email: string;
  password: string;
}
export interface IRegister {
  email: string;
  password: string;
}
export interface IApiResponse {
  success: boolean;
  message: string;
  data: any;
  status: any;
}

export interface IResource {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string;
}
export interface IUser {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}
export interface userform {
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
  }