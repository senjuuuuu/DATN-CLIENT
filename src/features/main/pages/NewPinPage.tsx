import React from 'react';
import { NewPinForm } from 'features/main/components';
import styled from 'styled-components';

export default function NewPinPage() {
  return (
    <Wrapper>
      <NewPinContainer>
        <NewPinForm />
      </NewPinContainer>
    </Wrapper>
  );
}
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  width: 100%;
  height: 100%;
`;

export const NewPinContainer = styled.div`
  padding: 35px;
  width: 880px;
  height: auto;
  border-radius: var(--border-md);
  box-shadow: ${(props) => props.theme.shadow_drop.sm};
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.border};
  @media (max-width: 901px) {
    width: 90%;
  }
`;
