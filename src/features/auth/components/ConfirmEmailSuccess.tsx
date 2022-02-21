import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function ConfirmEmailSuccess() {
  return (
    <Wrapper>
      <Title>congratulation!</Title>
      <SubTitle>Your account has been activated.</SubTitle>
      <Button to="/auth/login">login now</Button>
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
`;
export const SubTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 900;
  margin-bottom: 0.75rem;
`;
export const Button = styled(Link)`
  text-transform: uppercase;
  background: transparent;
  border-radius: var(--border-sm);
  box-shadow: ${(props) => props.theme.shadow_drop.sm};
  font-weight: 900;
  font-size: 1.25rem;
  color: var(--pink);
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.border};
  padding: 0.5rem 2rem;
  transition: 0.75s ease-in-out;
  text-decoration: underline solid transparent;
  :hover,
  :active {
    box-shadow: ${(props) => props.theme.shadow_inset};
    color: var(--gray);
    text-decoration: underline solid var(--pink);
  }
`;
