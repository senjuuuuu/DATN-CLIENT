import * as React from 'react';
import { MainWrapper } from '../asset/styles';
import { SubContent, RegisterForm } from '../components';

export default function RegisterPage() {
  return (
    <>
      <SubContent
        position_1="right"
        position_2="bottom"
        title="Welcome"
        subTitle="lorem dshda sjdasd   connnected ..."
        linkTo="/auth/login"
        linkColor="info"
        linkTitle="Sign in now!"
      />
      <MainWrapper>
        <RegisterForm />
      </MainWrapper>
    </>
  );
}
