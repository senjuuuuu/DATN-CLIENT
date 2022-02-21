import * as React from 'react';
import { Social, SocialIcon } from '../asset/styles';
import { FaFacebookF, FaGithub, FaGooglePlusG } from '../asset/icons';
import { useAppDispatch } from 'app/hooks';
import { authActions } from '../authSlice';
export interface ISocialMediaProps {}

export function SocialMedia(props: ISocialMediaProps) {
  const dispatch = useAppDispatch();
  const google = () => {
    window.open('http://localhost:5000/api/auth/google', '_self');
    dispatch(authActions.loginSocial());
  };
  const github = () => {
    window.open('http://localhost:5000/api/auth/github', '_self');
  };
  const facebook = () => {
    window.open('http://localhost:5000/api/auth/facebook', '_self');
  };
  return (
    <Social>
      <SocialIcon onClick={facebook}>
        <FaFacebookF fontSize="1.3rem" color="#4267B2" />
      </SocialIcon>
      <SocialIcon onClick={google}>
        <FaGooglePlusG fontSize="2rem" color="#DB4437" />
      </SocialIcon>
      <SocialIcon onClick={github}>
        <FaGithub fontSize="1.5rem" color="#222222" />
      </SocialIcon>
    </Social>
  );
}
