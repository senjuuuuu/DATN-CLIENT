import * as React from 'react';
import { useClickOutside } from 'hooks/useClickOutside';

import styled from 'styled-components';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

export interface IDropdownProps {}
const DropdownContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  cursor: pointer;
  font-size: 1rem;
`;
const DropdownListContainer = styled.div`
  position: absolute;
  top: 3.25rem;
  right: 0rem;
  box-shadow: ${(props) => props.theme.shadow_drop.sm};
  /* width: 100%; */
  border-radius: var(--border-sm);
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.border};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0.75rem 0;
  background: ${(props) => props.theme.colors.primary};
  .active {
  }
`;
export const Icon = styled.div`
  font-size: 1.25rem;
  cursor: pointer;
  padding: 0.5rem;
`;
export function Dropdown({ children }: { children: JSX.Element }) {
  const [isOpen, setIsOpen] = React.useState(false);
  let node = useClickOutside(() => setIsOpen(false));
  return (
    <DropdownContainer ref={node}>
      <Icon onClick={() => setIsOpen(!isOpen)}>{isOpen ? <FaAngleUp /> : <FaAngleDown />}</Icon>
      {isOpen && <DropdownListContainer>{children}</DropdownListContainer>}
    </DropdownContainer>
  );
}
