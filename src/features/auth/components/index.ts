import { lazy } from 'react';

export * from './Layout';
export * from './SubContent';
export * from './ErrorField';
export * from './LoginForm';
export * from './RegisterForm';
export * from './SocialMedia';
export const ConfirmEmailSuccess = lazy(() => import('./ConfirmEmailSuccess'));
export const ConfirmEmail = lazy(() => import('./ConfirmEmail'));
