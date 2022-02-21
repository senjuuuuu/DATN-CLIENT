import { useClickOutside } from 'hooks/useClickOutside';
import { type } from 'os';
import * as React from 'react';
import styled, { css } from 'styled-components';

export interface IModelProps {
  handleClose?: any; // renderProp fn expects truthy or falsey
  show?: boolean; // boolean - visible/invisible
  headerText?: string; // text
  detailText?: string; // html / inner text
}

export function ConfirmationModal(props: IModelProps) {
  const node = useClickOutside(() => {
    handleClose(false);
  });
  const {
    handleClose, // renderProp fn expects truthy or falsey
    show, // boolean - visible/invisible
    headerText, // text
    detailText, // html / inner text
  } = { ...props };
  return (
    <Model show={show}>
      <Container ref={node}>
        <Header>{headerText}</Header>
        <Hr />
        <Slot>{detailText}</Slot>
        <ButtonBar>
          <Button color="danger" onClick={() => handleClose(true)}>
            No
          </Button>
          <Button color="success" onClick={() => handleClose(false)}>
            Yes
          </Button>
        </ButtonBar>
      </Container>
    </Model>
  );
}

export const animateDropdownShow = css`
  opacity: 1;
  animation: show-navbar-dropdown 0.25s ease forwards;
  @keyframes show-dropdown {
    0% {
      opacity: 0;
      transform: translate(0, 10px) perspective(200px) rotateX(-2deg);
      transition: visibility 0.45s, opacity 0.45s, transform 0.45s;
    }
    100% {
      transform: translate(0, 0);
      opacity: 1;
    }
  }
`;
export const animateDropdownHidden = css`
  display: block;
  animation: hide-navbar-dropdown 0.15s ease backwards;
  @keyframes hide-navbar-dropdown {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: translate(0, 10px);
    }
  }
`;
type model = {
  show?: boolean;
};
const Model = styled.div<model>`
  ${({ show }) => (show ? animateDropdownShow : animateDropdownHidden)};
  z-index: auto;
  display: ${({ show }) => (show ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: transparent;
`;
type container = {};
const Container = styled.div<container>`
  box-shadow: ${(props) => props.theme.shadow_drop.sm};
  border: 0.0625rem solid;
  border-color: ${(props) => props.theme.colors.border};
  background: ${(props) => props.theme.colors.primary};
  border-radius: var(--border-sm);
  position: fixed;
  width: 33%;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 0.75rem;
`;
const Header = styled.span`
  font-weight: 900;
  font-size: 1.5rem;
`;
const Hr = styled.hr`
  box-sizing: content-box;
  height: 0;
  overflow: visible;
  margin-top: 0.25rem;
  margin-bottom: 1.5rem;
  border: 0;
  border-top: 0.0625rem solid rgba(38, 40, 51, 0.05);
`;
const Slot = styled.p``;
const ButtonBar = styled.div`
  display: flex;
  justify-content: flex-end;
  button:first-child {
    margin-right: 1.5rem;
    width: 8rem;
  }
`;
export interface ButtonProps {
  sz?: string;
  color?: string;
  disable?: boolean;
}
export const BaseButton = styled.button<ButtonProps>`
  width: 300px;
  height: 40px;
  background: transparent;
  border-radius: var(--border-sm);
  outline: none;
  box-shadow: ${(props) => (props.disable ? props.theme.shadow_inset : props.theme.shadow_drop.sm)};
  font-weight: 900;
  font-size: 1.25rem;
  color: ${(props) => `var(--${props.color})`};
  border: 0.0625rem solid ${(props) => props.theme.colors.border};
  margin: 1rem 0;
  :hover,
  :active {
    box-shadow: ${(props) => props.theme.shadow_inset};
  }
`;
const Button = styled(BaseButton)`
  width: 5.5rem;
  height: 2.35rem;
  border-radius: 0.35rem;
`;
