import { LoadingPage } from 'components/common';
import React, { lazy } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';
const GetEmailForm = lazy(() => import('../components/GetEmailForm'));
export interface IForgotPasswordPageProps {}
const ForgotPasswordWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
export function ForgotPasswordPage(props: IForgotPasswordPageProps) {
  const match = useRouteMatch();
  return (
    <ForgotPasswordWrapper>
      <Switch>
        <Route path={match.path} exact>
          <React.Suspense fallback={<LoadingPage />}>
            <GetEmailForm />
          </React.Suspense>
        </Route>
      </Switch>
    </ForgotPasswordWrapper>
  );
}
