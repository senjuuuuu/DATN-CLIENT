import * as React from 'react';
import styled from 'styled-components';
import NavBar from '../NavBar';
import { NavAction } from '../NavBar/NavAction';

export function WrapperLayout({ children }: { children: JSX.Element }) {
  return (
    <Wrapper>
      <NavBar />
      <Content>{children}</Content>
      <NavAction />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.primary};
`;
export const Content = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem 0;
  width: 100%;
  height: 100%;
`;
