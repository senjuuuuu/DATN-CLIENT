import { LoadingPage } from 'components/common';
import * as React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { Layout } from './components';
import { LoginPage, RegisterPage } from './pages';
import { ForgotPasswordPage } from './pages/ForgotPasswordPage';

export interface IAuthPagesProps {}

export default function AuthFeature(props: IAuthPagesProps) {
  const match = useRouteMatch();
  return (
    <Layout>
      <Switch>
        <Route path={match.path} exact>
          <React.Suspense fallback={<LoadingPage />}>
            <LoginPage />
          </React.Suspense>
        </Route>
        <Route path={`${match.path}/login`}>
          <React.Suspense fallback={<LoadingPage />}>
            <LoginPage />
          </React.Suspense>
        </Route>
        <Route path={`${match.path}/register`}>
          <React.Suspense fallback={<LoadingPage />}>
            <RegisterPage />
          </React.Suspense>
        </Route>
        <Route path={`${match.path}/forgot-password`}>
          <ForgotPasswordPage />
        </Route>
      </Switch>
    </Layout>
  );
}
