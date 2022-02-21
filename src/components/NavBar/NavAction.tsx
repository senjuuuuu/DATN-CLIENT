import * as React from 'react';
import styled from 'styled-components';
import { MdAdd, MdClose } from 'react-icons/md';
import { useClickOutside } from 'hooks/useClickOutside';
import { Link } from 'react-router-dom';
export interface INavActionProps {}

export function NavAction(props: INavActionProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  let node = useClickOutside(() => setIsOpen(false));
  return (
    <ActionWrapper ref={node}>
      <Icon onClick={() => setIsOpen(!isOpen)}>{isOpen ? <MdClose /> : <MdAdd />}</Icon>
      {isOpen && (
        <DropdownList>
          <ListItem to="/new-pin" onClick={() => setIsOpen(false)}>
            <MdAdd />
            Create new pin
          </ListItem>
          <ListItem to="/">1</ListItem>
        </DropdownList>
      )}
    </ActionWrapper>
  );
}
export const ActionWrapper = styled.div`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  z-index: 999;
`;
export const Icon = styled.div`
  position: relative;
  font-size: 1.75rem;
  height: 2.5rem;
  width: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.25rem;
  border-radius: var(--rounded);
  box-shadow: ${(props) => props.theme.shadow_drop.sm};
  background-color: ${(props) => props.theme.colors.primary};
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.border};
  margin-right: 0.5rem;
  :hover,
  :active {
    box-shadow: ${(props) => props.theme.shadow_inset};
    cursor: pointer;
  }
  position: relative;
  .first {
    right: -7.5rem;
  }
`;
export const DropdownList = styled.div`
  padding: 0.5rem 0;
  position: absolute;
  width: 150px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  bottom: 3rem;
  right: 0.5rem;
  box-shadow: ${(props) => props.theme.shadow_drop.sm};
  /* width: 100%; */
  border-radius: var(--border-sm);
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.border};
  background: ${(props) => props.theme.colors.primary};
`;
const ListItem = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0.5rem 0.5rem;
  width: 100%;
  cursor: pointer;
  transition: 0.35s ease;
  /* font-size: 1.15rem; */
  :hover {
    box-shadow: ${(props) => props.theme.shadow_inset};
    font-weight: 700;
  }
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.25rem;
    font-size: 1.25rem;
  }
  @media (max-width: 768px) {
    padding-left: 0.5rem;
    padding-right: 0;
  }
`;
