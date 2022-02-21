import { yupResolver } from '@hookform/resolvers/yup';
import * as React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { HiOutlineMail } from '../asset/icons';
import { ALink, Button, Form, FormControl, Input, InputGroup, InputIcon, SubTitle, Title } from '../asset/styles';
import { SocialMedia, ErrorField } from './index';
const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required();
type Inputs = {
  email: string;
  password: string;
};

export function ChangePasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
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
          <Input type="text" placeholder="Enter your email" autoFocus {...register('email')} />
        </InputGroup>
        <ErrorField errorField={errors.email} message={errors.email?.message} />
      </FormControl>
      <SubTitle>
        You can <ALink to="/register">Sign in</ALink> or <ALink to="/register">Sign up</ALink>
      </SubTitle>
      <Button color="success" type="submit">
        Go
      </Button>
    </Form>
  );
}
