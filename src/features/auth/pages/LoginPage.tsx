import * as React from 'react';
import { MainWrapper } from '../asset/styles';
import { SubContent, LoginForm } from '../components';

export default function LoginPage() {
  return (
    <>
      <MainWrapper>
        <LoginForm />
      </MainWrapper>
      <SubContent
        position_1="top"
        position_2="bottom"
        title="Welcome back"
        subTitle="lorem dshda sjdasd   connnected ..."
        linkTo="/auth/register"
        linkColor="info"
        linkTitle="Sign up now!"
      />
    </>
  );
}
