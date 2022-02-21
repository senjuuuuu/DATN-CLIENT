import * as React from 'react';
import styled from 'styled-components';
import { TableDropdown } from './TableDropdown/TableDropdown';
import { MoreDropdown, ShareDropdown } from './Group';
import { Link } from 'react-router-dom';
export interface IPinProps {
  url: any;
}

export function Pin({ url }: IPinProps) {
  return (
    <Wrapper>
      <Container>
        <ImgWrapper>
          <ImageContainer to="/pin/id">
            <img src={url} alt="wlop" />
            <Title>gfdgdiiiiiiiiiiiiddddddddddddddiiiiiiii</Title>
          </ImageContainer>
          <SelectGroup className="pinHover">
            <TableDropdown />
            <ButtonSelect>Save</ButtonSelect>
          </SelectGroup>
          <ActionGroup className="pinHover">
            <LinkContainer to="google/com">link web</LinkContainer>
            <Group>
              <ShareDropdown />
              <MoreDropdown />
            </Group>
          </ActionGroup>
        </ImgWrapper>
        <InfoContainer to="profile/id">
          <Avatar>
            <img
              src="https://yt3.ggpht.com/a/AATXAJy6EuB0KnQX8i5J4-KtDZeTke9JYhZ1M8XuXA=s900-c-k-c0xffffffff-no-rj-mo"
              alt=""
            />
          </Avatar>
          <span>Senju</span>
        </InfoContainer>
      </Container>
    </Wrapper>
  );
}
export const Group = styled.div`
  display: flex;
  z-index: 99;
`;
export const Icon = styled.div`
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
export const Wrapper = styled.div`
  display: inline-flex;
  padding: 10px;
`;
export const ImgWrapper = styled.div`
  position: relative;
  width: 100%;
  :hover {
    .pinHover {
      display: flex !important;
    }
  }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  width: 236px;
  border-radius: var(--border-md);
  box-shadow: ${(props) => props.theme.shadow_drop.sm};
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.border};
  transition: 0.35s ease-in-out;
  :hover {
    box-shadow: ${(props) => props.theme.shadow_inset};
  }
`;
export const ImageContainer = styled(Link)`
  z-index: 1;
  padding: 5px;
  display: flex;
  flex-direction: column;
  width: 100%;
  cursor: zoom-in;
  img {
    position: relative;
    width: 100%;
    border-radius: var(--border-md);
    object-fit: cover;
  }
`;
export const Title = styled.span`
  padding-top: 0.5rem;
  font-size: 1.05rem;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1; /* number of lines to show */
  -webkit-box-orient: vertical;
  max-width: 224px;
  overflow-wrap: break-word;
`;
const InfoContainer = styled(Link)`
  display: flex;
  width: 100%;
  padding: 5px;
  align-items: center;
  :hover {
    span {
      text-decoration: underline;
    }
  }
  span {
    padding-left: 5px;
  }
`;
export const Avatar = styled.div`
  cursor: pointer;
  width: 2.5rem;
  height: 2.5rem;
  background: ${(props) => props.theme.colors.primary};
  border: 2px solid;
  box-shadow: ${(props) => `${props.theme.shadow_drop.sm},${props.theme.shadow_inset}`};
  border-radius: var(--border-xl);
  border-color: ${(props) => props.theme.colors.border};
  img {
    border-radius: var(--rounded);
    width: 100%; /* or any custom size */
    height: 100%;
    object-fit: contain;
  }
`;
export const WrapperHover = styled.div`
  position: absolute;
  /* margin: 10px 10px 0 10px; */
  background: transparent;
  display: none;
  justify-content: flex-end;
  align-items: center;
  cursor: zoom-in;
  width: 91%;
  height: 2.5rem;
  right: 50%;
  transform: translateX(50%);
`;
export const Button = styled.button`
  color: var(--gray);
  font-weight: 700;
  outline: none;
  width: 100%;
  height: 2.5rem;
  border-radius: var(--border-sm);
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.border};
  :active,
  :hover {
    box-shadow: ${(props) => props.theme.shadow_inset};
  }
`;
export const SelectGroup = styled(WrapperHover)`
  top: 10px;
`;
export const ButtonSelect = styled(Button)`
  width: 30%;
  height: 100%;
  border-radius: 0 var(--border-sm) var(--border-sm) 0;
`;
export const ActionGroup = styled(WrapperHover)`
  z-index: 2;
  bottom: 40px;
  justify-content: space-between;
  width: 88%;
`;
export const LinkContainer = styled(Link)`
  max-width: 100px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  float: left;
  cursor: pointer;
  font-weight: 700;
  font-style: italic;
  padding: 0.25rem 0.5rem;
  border-radius: var(--border-xl);
  background: ${(props) => props.theme.colors.primary};
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.border};
  :hover,
  :active {
    text-decoration: underline;
    box-shadow: ${(props) => props.theme.shadow_inset};
    cursor: pointer;
  }
`;
export const ShareContainer = styled.div``;
export const MoreContainer = styled.div``;
