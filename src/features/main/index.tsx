import * as React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { WrapperLayout } from 'components/Layout';
import { LoadingPage } from 'components/common';
import { HomePage, NewPinPage, PinDetailsPage, FollowingPage } from './pages';
export const ProfileFeature = React.lazy(() => import('features/profile'));

export interface IAppProps {}

export default function MainFeature(props: IAppProps) {
  const match = useRouteMatch();
  return (
    <WrapperLayout>
      <Switch>
        <Route path={match.path} exact>
          <React.Suspense fallback={<LoadingPage />}>
            <HomePage />
          </React.Suspense>
        </Route>
        <Route path={`${match.path}following`}>
          <React.Suspense fallback={<LoadingPage />}>
            <FollowingPage />
          </React.Suspense>
        </Route>
        <Route path={`${match.path}new-pin`}>
          <React.Suspense fallback={<LoadingPage />}>
            <NewPinPage />
          </React.Suspense>
        </Route>
        <Route path={`${match.path}pin/:id`}>
          <React.Suspense fallback={<LoadingPage />}>
            <PinDetailsPage />
          </React.Suspense>
        </Route>
        <Route path={`${match.path}profile/:id`}>
          <React.Suspense fallback={<LoadingPage />}>
            <ProfileFeature />
          </React.Suspense>
        </Route>
      </Switch>
    </WrapperLayout>
  );
}
