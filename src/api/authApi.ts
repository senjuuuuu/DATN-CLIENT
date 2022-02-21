import axiosClient from './axiosClient';
import { Auth } from 'model/Auth';
export interface LoginData {
  email: string;
  password: string;
}
export interface SignupData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}
const authApi = {
  login(data: LoginData): Promise<Auth> {
    const url = 'auth/login';
    return axiosClient.post(url, data);
  },
  signup(data: SignupData): Promise<Auth> {
    const url = 'auth/signup';
    return axiosClient.post(url, data);
  },
  logout(): Promise<any> {
    const url = 'auth/logout';
    return axiosClient.get(url);
  },
  loginSocial(): Promise<Auth> {
    const url = 'auth/loginSuccess';
    return axiosClient.post(url);
  },
};
export default authApi;
