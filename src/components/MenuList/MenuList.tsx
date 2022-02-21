import { useClickOutside } from 'hooks/useClickOutside';
import * as React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { RiUserFollowFill, RiHome4Fill } from 'react-icons/ri';
import { IconType } from 'react-icons/lib';
export interface IMenuListProps {}
const DropdownContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  box-shadow: ${(props) => props.theme.shadow_drop.sm};
  width: 100%;
  border-radius: var(--border-xl);
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.border};
  background: ${(props) => props.theme.colors.primary};
  text-transform: capitalize;
  :hover {
    box-shadow: ${(props) => props.theme.shadow_inset};
  }
  cursor: pointer;
`;
const DropdownListContainer = styled.div`
  position: absolute;
  top: 2.65rem;
  box-shadow: ${(props) => props.theme.shadow_drop.sm};
  width: 100%;
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
  @media (max-width: 576px) {
    left: -2rem;
  }
  @media (max-width: 1200px) {
    width: 140px;
  }
`;
const ListItem = styled(NavLink)`
  padding: 0.5rem 0.75rem;
  width: 100%;
  cursor: pointer;
  transition: 0.35s ease;
  :hover {
    box-shadow: ${(props) => props.theme.shadow_inset};
    font-weight: 900;
  }
  @media (max-width: 768px) {
    padding-left: 0.5rem;
    padding-right: 0;
  }
`;
const DropdownHeader = styled.div`
  font-weight: 700;
  line-height: 2rem;
  @media (max-width: 575px) {
    .iconHeader {
      margin-right: 0;
    }
  }
`;
const Icon = styled.span`
  font-size: 1.25rem;
  margin-right: 0.25rem;
`;
const TextHeader = styled.span`
  @media (max-width: 768px) {
    display: none;
  }
`;
export interface IOptions {
  name: String;
  path: any;
  icon: IconType;
}
const options: Array<IOptions> = [
  { name: 'home', path: '/', icon: RiHome4Fill },
  { name: 'following', path: '/following', icon: RiUserFollowFill },
];
export function MenuList(props: IMenuListProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedOption, setSelectedOption] = React.useState<IOptions>(options[0]);
  let node = useClickOutside(() => setIsOpen(false));
  const onOptionClicked = (value: IOptions) => {
    setSelectedOption(value);
    setIsOpen(false);
  };
  const location = useLocation();
  React.useEffect(() => {
    if (location.pathname === '/') {
      setSelectedOption(options[0]);
    } else if (location.pathname === '/following') {
      setSelectedOption(options[1]);
    }
  }, [location.pathname]);

  return (
    <DropdownContainer ref={node} onClick={() => setIsOpen(!isOpen)}>
      <DropdownHeader>
        <Icon className="iconHeader">
          <selectedOption.icon />
        </Icon>
        <TextHeader>{selectedOption.name}</TextHeader>
      </DropdownHeader>
      {isOpen && (
        <DropdownListContainer>
          {options.map((option, key) => (
            <ListItem key={key} to={option.path} onClick={() => onOptionClicked(option)}>
              <Icon>
                <option.icon />
              </Icon>
              {option.name}
            </ListItem>
          ))}
        </DropdownListContainer>
      )}
    </DropdownContainer>
  );
}
