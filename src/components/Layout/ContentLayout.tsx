import * as React from 'react';
import styled from 'styled-components';
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  width: 100%;
  height: 100%;
`;
export const Container = styled.div`
  display: flex;
  width: 90%;
`;

export function ContentLayout({ children }: { children: JSX.Element }) {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
}
