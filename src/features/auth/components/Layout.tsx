import * as React from 'react';
import styled from 'styled-components';
export interface IAuthLayoutProps {}
export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  font-size: 12px;
  display: flex;
  align-items: center;
`;
export const Main = styled.div`
  margin: 1rem auto;
  display: flex;
  width: 1000px;
  min-height: 600px;
  height: auto;
  border-radius: var(--border-md);
  box-shadow: ${(props) => props.theme.shadow_drop.md};
  background-color: ${(props) => props.theme.colors.primary};
  @media (max-width: 576px) {
    width: 100%;
    box-shadow: none;
  }
  @media (min-width: 576px) and (max-width: 768px) {
    width: 90%;
  }
  @media (min-width: 768px) and (max-width: 1000px) {
    width: 95%;
  }
`;
export function Layout({ children }: { children: JSX.Element }) {
  return (
    <Wrapper>
      <Main>{children}</Main>
    </Wrapper>
  );
}
