import { LoadingPage } from 'components/common';
import React, { lazy, Suspense, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { DarkTheme, GlobalStyles, LightTheme } from 'theme';
import AuthFeature from 'features/auth';
import MainFeature from 'features/main';
import { ConfirmEmailSuccess, ConfirmEmail } from 'features/auth/components';
const NotFound = lazy(() => import('components/common/NotFound'));
export type Mode = 'light' | 'dark';
function App() {
  const [theme] = useState<Mode>('light');
  return (
    /* Theme from styled-components */
    <ThemeProvider theme={theme === 'light' ? LightTheme : DarkTheme}>
      {/* Styles from styled-components  */}
      <GlobalStyles />
      {/* Main start  */}
      <Switch>
        <Route path="/email/confirm-success">
          <Suspense fallback={<LoadingPage />}>
            <ConfirmEmailSuccess />
          </Suspense>
        </Route>
        <Route path="/email/confirm">
          <Suspense fallback={<LoadingPage />}>
            <ConfirmEmail />
          </Suspense>
        </Route>
        <Route path="/auth">
          <AuthFeature />
        </Route>
        <Route path="/" exact>
          <MainFeature />
        </Route>
        {/* NoteFound Page */}
        <Route path="*">
          <Suspense fallback={<LoadingPage />}>
            <NotFound />
          </Suspense>
        </Route>
      </Switch>
      {/* Main end  */}
    </ThemeProvider>
  );
}

export default App;
