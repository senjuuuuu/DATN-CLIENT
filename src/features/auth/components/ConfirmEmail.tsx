import * as React from 'react';
import styled from 'styled-components';

export default function ConfirmEmail() {
  return (
    <Wrapper>
      <Title>verify email!</Title>
      <SubTitle>Please check your email. You can click here:</SubTitle>
      <Button href="https://accounts.google.com/AccountChooser/signinchooser?service=mail&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&flowName=GlifWebSignIn&flowEntry=AccountChooser">
        Gmail
      </Button>
    </Wrapper>
  );
}
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;
export const Title = styled.div`
  font-size: 5rem;
  text-transform: uppercase;
  font-weight: 900;
  color: ${(props) => props.theme.colors.primary};
  outline: none;
  text-shadow: ${(props) => props.theme.shadow_drop.sm};

  @media (min-width: 0) and (max-width: 281px) {
    font-size: 2rem;
  }
  @media (min-width: 281px) and (max-width: 500px) {
    font-size: 3rem;
  }
  @media (min-width: 500px) and (max-width: 780px) {
    font-size: 4rem;
  }
`;
export const SubTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 900;
  margin-bottom: 0.75rem;
  @media (min-width: 0) and (max-width: 281px) {
    font-size: 0.75rem;
  }
`;
export const Button = styled.a`
  text-transform: uppercase;
  background: transparent;
  border-radius: var(--border-sm);
  box-shadow: ${(props) => props.theme.shadow_drop.sm};
  font-weight: 900;
  font-size: 1.25rem;
  color: var(--pink);
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.border};
  padding: 0.5rem 3rem;
  transition: 0.75s ease-in-out;
  text-decoration: underline solid transparent;
  :hover,
  :active {
    box-shadow: ${(props) => props.theme.shadow_inset};
    color: var(--gray);
    text-decoration: underline solid var(--pink);
    transition: 0.75s ease-in-out;
  }
  @media (min-width: 0) and (max-width: 281px) {
    font-size: 1rem;
  }
`;
