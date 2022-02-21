import { yupResolver } from '@hookform/resolvers/yup';
import * as React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { BsCheckAll, HiOutlineMail, RiLockPasswordLine, FaRegUser } from '../asset/icons';
import {
  ALink,
  Button,
  Form,
  FormCheck,
  FormCheckInput,
  FormCheckLabel,
  FormControl,
  InfoMobile,
  Input,
  InputGroup,
  InputIcon,
  SubTitle,
  Title,
} from '../asset/styles';
import { ErrorField, SocialMedia } from './index';
import { useAppDispatch } from 'app/hooks';
import { authActions } from '../authSlice';
import { authRegex } from 'constants/regex';
const schema = yup
  .object({
    name: yup.string().matches(authRegex.name, 'Name should not contain any special characters, symbols'),
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
    confirmPassword: yup
      .string()
      .required('Please confirm your password')
      .oneOf([yup.ref('password'), null], "Passwords don't match."),
  })
  .required();
type Inputs = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};
export function RegisterForm() {
  const [checked, setChecked] = React.useState(false);
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    dispatch(authActions.signup(data));
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Title>Register</Title>
      <SocialMedia />
      <SubTitle>or use email</SubTitle>
      <FormControl>
        <InputGroup>
          <InputIcon>
            <FaRegUser color={errors.name?.message && '#A91E2C'} />
          </InputIcon>
          {/* input */}
          <Input type="text" placeholder="Enter your name" autoFocus {...register('name')} />
        </InputGroup>
        <ErrorField errorField={errors.name} message={errors.name?.message} />
      </FormControl>
      <FormControl>
        <InputGroup>
          <InputIcon>
            <HiOutlineMail color={errors.email?.message && '#A91E2C'} />
          </InputIcon>
          {/* input */}
          <Input type="text" placeholder="Enter your email" autoFocus {...register('email')} />
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
      <FormControl>
        <InputGroup>
          <InputIcon>
            <RiLockPasswordLine color={errors.confirmPassword?.message && '#A91E2C'} />
          </InputIcon>
          {/* input */}
          <Input type="password" placeholder="Enter confirm your password" {...register('confirmPassword')} />
        </InputGroup>
        <ErrorField errorField={errors.confirmPassword} message={errors.confirmPassword?.message} />
      </FormControl>
      <FormCheck>
        <FormCheckInput id="t" type="checkbox" defaultChecked={checked} onChange={() => setChecked(!checked)} />
        <FormCheckLabel htmlFor="t">I agree to the terms and conditions</FormCheckLabel>
      </FormCheck>
      {checked ? (
        <Button disable={false} color="success" type="submit">
          <span>
            <BsCheckAll fontSize="2rem" />
          </span>
          Sign up
        </Button>
      ) : (
        <Button disable={true} color="success" disabled>
          <span>
            <BsCheckAll fontSize="2rem" />
          </span>
          Sign up
        </Button>
      )}
      <InfoMobile>
        <SubTitle>
          You have an account? <ALink to="/auth/login">Login now!</ALink>
        </SubTitle>
      </InfoMobile>
    </Form>
  );
}
