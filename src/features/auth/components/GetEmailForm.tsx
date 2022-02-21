import { yupResolver } from '@hookform/resolvers/yup';
import * as React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { HiOutlineMail } from '../asset/icons';
import { ALink, Button, Form, FormControl, Input, InputGroup, InputIcon, SubTitle, Title } from '../asset/styles';
import { ErrorField } from './index';
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

export default function GetEmailForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title>Find your email</Title>
        <SubTitle>Enter email your account</SubTitle>
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
          You can <ALink to="/auth/login">Sign in</ALink> or <ALink to="/auth/register">Sign up</ALink>
        </SubTitle>
        <Button color="info" type="submit">
          Go
        </Button>
      </Form>
    </>
  );
}
