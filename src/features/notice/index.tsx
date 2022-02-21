import * as React from 'react';
import { useClickOutside } from 'hooks/useClickOutside';
import styled from 'styled-components';
import { FaBell } from 'react-icons/fa';
import { NoticeContent } from './components';

export function NoticeFeature() {
  const [isOpenNotice, setIsOpenNotice] = React.useState(false);
  let nodeNotice = useClickOutside(() => {
    setIsOpenNotice(false);
  });
  return (
    <NoticeContainer ref={nodeNotice}>
      <Icon onClick={() => setIsOpenNotice(!isOpenNotice)}>
        <FaBell />
        <Info>3</Info>
      </Icon>
      {isOpenNotice && (
        <Content>
          <NoticeContent />
        </Content>
      )}
    </NoticeContainer>
  );
}
export const Icon = styled.div`
  font-size: 1.25rem;
  height: 2rem;
  width: 2rem;
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
export const Info = styled.span`
  position: absolute;
  top: -5px;
  right: 0;
  width: 1rem;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
  color: var(--red);
  font-weight: 900;
  font-size: 0.7rem;
  border-radius: var(--rounded);
  box-shadow: ${(props) => props.theme.shadow_inset};
  background-color: ${(props) => props.theme.colors.primary};
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.border};
`;
export const NoticeContainer = styled.div``;
export const Content = styled.div`
  padding: 0.75rem 0;
  font-size: 1rem;
  position: absolute;
  right: 1rem;
  top: 4rem;
  width: 350px;
  max-height: 500px;
  background: ${(props) => props.theme.colors.primary};
  box-shadow: ${(props) => props.theme.shadow_drop.sm};
  border: 1px solid;
  border-radius: var(--border-sm);
  border-color: ${(props) => props.theme.colors.border};
  overflow-y: scroll;
`;
