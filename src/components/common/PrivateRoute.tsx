import { Redirect } from 'react-router-dom';

export function PrivateRoute({ children }: { children: JSX.Element }) {
  // Check if user is logged in
  // If yes, show route
  // Otherwise, redirect to login page
  const isLoggedIn = Boolean(localStorage.getItem('access_token'));
  if (!isLoggedIn) return <Redirect to='/login' />;
  return children;
}
