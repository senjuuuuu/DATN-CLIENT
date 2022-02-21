import * as React from 'react';
import styled from 'styled-components';

export interface ICommentFormProps {
  setOpenForm?: React.Dispatch<React.SetStateAction<boolean>>;
}

export function CommentForm(props: ICommentFormProps) {
  return (
    <Form>
      <InputGroup>
        <Avatar>
          <img src="https://i.pinimg.com/236x/9b/32/4c/9b324c8be94520bc2eb8df268e5c711f.jpg" alt="" />
        </Avatar>
        <Input type="text" name="" id="" autoFocus />
      </InputGroup>
      <ButtonGroup>
        <Button onClick={() => props.setOpenForm && props.setOpenForm(false)}>cancel</Button>
        <Button>Save</Button>
      </ButtonGroup>
    </Form>
  );
}
export const InputGroup = styled.div`
  width: 100%;
  display: flex;
`;
export const Avatar = styled.a`
  margin-right: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  min-width: 2.5rem;
  min-height: 2.5rem;
  background: ${(props) => props.theme.colors.primary};
  border: 2px solid;
  box-shadow: ${(props) => `${props.theme.shadow_drop.sm},${props.theme.shadow_inset}`};
  border-radius: var(--rounded);
  border-color: ${(props) => props.theme.colors.border};
  img {
    border-radius: var(--rounded);
    object-fit: cover;
    max-width: 2rem;
    max-height: 2rem;
  }
`;
export const Form = styled.div`
  padding: 0.25rem 0;
  width: 100%;
`;
export const Input = styled.input`
  color: ${(props) => props.theme.colors.input};
  padding-left: 0.75rem;
  outline: none;
  width: 100%;
  height: 2.5rem;
  border-radius: var(--border-sm);
  background-color: transparent;
  box-shadow: ${(props) => props.theme.shadow_inset};
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.border};
`;
export const ButtonGroup = styled.div`
  width: 100%;
  height: 2rem;
  display: flex;
  justify-content: flex-end;
  margin-top: 0.5rem;
`;
export const Button = styled.button`
  text-transform: capitalize;
  font-weight: 700;
  color: var(--gray);
  margin-left: 0.5rem;
  height: 100%;
  border-radius: 0.35rem;
  box-shadow: ${(props) => props.theme.shadow_drop.sm};
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.border};
  :hover,
  :active {
    box-shadow: ${(props) => props.theme.shadow_inset};
  }
`;
