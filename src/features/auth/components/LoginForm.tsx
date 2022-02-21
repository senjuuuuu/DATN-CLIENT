import { yupResolver } from '@hookform/resolvers/yup';
import * as React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { GoSignIn, HiOutlineMail, RiLockPasswordLine } from '../asset/icons';
import {
  ALink,
  Button,
  Form,
  FormControl,
  InfoMobile,
  Input,
  InputGroup,
  InputIcon,
  SubTitle,
  Title,
} from '../asset/styles';
import { ErrorField, SocialMedia } from './index';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { authActions } from '../authSlice';
import { SpinnerBorder, ConfirmationModal } from 'components/common';
import { authRegex } from 'constants/regex';
const schema = yup
  .object({
    email: yup
      .string()
      .email('Email is not valid')
      .required('Email is require')
      .matches(authRegex.email, 'Email is not valid'),
    password: yup
      .string()
      .min(6, 'Your password is at least eight 6 characters long. ')
      .max(1000, 'Length of the password should be between 6-1000')
      .required('Password is require')
      .matches(authRegex.password, 'Password should not contain any special characters, symbols or spaces'),
  })
  .required();
type Inputs = {
  email: string;
  password: string;
};
export function LoginForm() {
  const [show, setShow] = React.useState(false);

  const dispatch = useAppDispatch();
  const { logging, isLoggedIn } = useAppSelector((state) => state.auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    dispatch(authActions.login(data));
  };
  const hideModal = (arg: any) => {
    setShow(false);
    // actOnModalResult(arg);
  };
  const toast = () => (
    <ConfirmationModal
      show={show}
      headerText="Confirm delete item?"
      handleClose={hideModal}
      detailText="loremmmmmmmmm"
    />
  );
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Title>Login</Title>
      <SocialMedia />
      <SubTitle>or use email</SubTitle>
      <FormControl>
        <InputGroup>
          <InputIcon>
            <HiOutlineMail color={errors.email?.message && '#A91E2C'} />
          </InputIcon>
          {/* input */}
          <Input type="text" placeholder="Enter your email" {...register('email')} />
        </InputGroup>
        <ErrorField errorField={errors.email} message={errors.email?.message} />
      </FormControl>
      <FormControl>
        <InputGroup>
          <InputIcon>
            <RiLockPasswordLine color={errors.password?.message && '#A91E2C'} />
          </InputIcon>
          {/* input */}
          <Input type="password" placeholder="Enter your password" {...register('password')} />
        </InputGroup>
        <ErrorField errorField={errors.password} message={errors.password?.message} />
      </FormControl>
      <SubTitle>
        Forgot password? <ALink to="/auth/forgot-password">Click here.</ALink>
      </SubTitle>
      <Button color="success" type="submit">
        {logging ? (
          <span>
            <SpinnerBorder /> Loading
          </span>
        ) : (
          <span>
            <GoSignIn /> Sign in
          </span>
        )}
      </Button>
      <InfoMobile>
        <SubTitle>
          Do not have an account? <ALink to="/auth/register">Create now!</ALink>
        </SubTitle>
      </InfoMobile>
    </Form>
  );
}
