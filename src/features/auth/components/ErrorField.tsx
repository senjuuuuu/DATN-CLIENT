import * as React from 'react';
import { ErrorMessage } from '../asset/styles';
import { CgDanger } from '../asset/icons';
export interface IErrorFieldProps {
  message?: string;
  errorField?: any;
}

export function ErrorField({ errorField, message }: IErrorFieldProps) {
  return (
    <ErrorMessage>
      {errorField && (
        <span>
          <CgDanger />
        </span>
      )}
      {message}
    </ErrorMessage>
  );
}
