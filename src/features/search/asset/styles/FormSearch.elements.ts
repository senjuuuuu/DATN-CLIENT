import styled from 'styled-components';
import { InputIcon } from './common';
export const Form = styled.form`
  width: 100%;
  height: 2.5rem;
`;
export const Input = styled.input`
  font-size: 1rem;
  font-weight: 700;
  width: 100%;
  outline: none;
  background: transparent;
  border: none;
  padding: 0 0.25rem;
  color: ${(props) => props.theme.colors.input};
  ::placeholder {
    font-weight: 300;
    font-style: italic;
    color: ${(props) => props.theme.colors.input};
    opacity: 0.5;
  }
`;
export const InputGroup = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border-radius: var(--border-xl);
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.border};
  box-shadow: ${(props) => props.theme.shadow_inset};
`;
export const InputIconLeft = styled(InputIcon)`
  margin-left: 0.75rem;
  margin-right: 0.25rem;
`;
export const InputIconRight = styled(InputIcon)`
  margin-left: 0.25rem;
  margin-right: 0.75rem;
  :hover {
    box-shadow: ${(props) => props.theme.shadow_drop.sm};
    opacity: 1;
  }
  :active {
    box-shadow: ${(props) => props.theme.shadow_inset};
  }
`;
