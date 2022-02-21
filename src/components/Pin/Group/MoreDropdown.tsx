import * as React from 'react';
import styled from 'styled-components';
import { HiDotsHorizontal } from 'react-icons/hi';
import { useClickOutside } from 'hooks/useClickOutside';

export function MoreDropdown() {
  const [isOpen, setIsOpen] = React.useState(false);
  let node = useClickOutside(() => setIsOpen(false));

  return (
    <Wrapper ref={node}>
      <Icon onClick={() => setIsOpen(!isOpen)}>
        <HiDotsHorizontal />
      </Icon>
      {isOpen && (
        <DropdownList>
          <ListItem>1</ListItem>
        </DropdownList>
      )}
    </Wrapper>
  );
}
const Wrapper = styled.div`
  position: relative;
`;
const Icon = styled.div`
  font-size: 1.25rem;
  height: 2rem;
  width: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.25rem;
  border-radius: var(--rounded);
  /* box-shadow: ${(props) => props.theme.shadow_drop.sm}; */
  background-color: ${(props) => props.theme.colors.primary};
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.border};
  margin-left: 0.5rem;
  :hover,
  :active {
    box-shadow: ${(props) => props.theme.shadow_inset};
    cursor: pointer;
  }
`;
const DropdownList = styled.div`
  padding: 0.5rem 0;
  position: absolute;
  width: 150px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  top: 2.5rem;
  right: 0rem;
  box-shadow: ${(props) => props.theme.shadow_drop.sm};
  /* width: 100%; */
  border-radius: var(--border-sm);
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.border};
  background: ${(props) => props.theme.colors.primary};
`;
const ListItem = styled.div`
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
`;
