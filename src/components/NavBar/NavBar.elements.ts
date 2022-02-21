import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ListItem = styled.div`
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
export const DropdownList = styled.div`
  width: 150px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
export const NavBarWrapper = styled.nav`
  /* position: sticky;
  top: 0;
  left: 0; */
  position: relative;
  z-index: 500;
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  padding: 1rem 1rem;
  height: 4.5rem;
  background: ${(props) => props.theme.colors.primary};
  width: 100%;
`;
export const NavLogoWrapper = styled(Link)`
  display: flex;
  align-items: center;
  margin-right: 1rem;
  font-size: 2rem;
  span {
    font-size: 1rem;
    line-height: 2rem;
    font-weight: 900;
    text-decoration: underline;
  }
  width: 5%;
  @media (max-width: 576px) {
    margin-right: 1rem;
    width: 7%;
    span:first-child {
      display: none;
    }
  }
`;
export const NavMenuWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  width: 15%;
  background: #e6e7ee;
  margin-right: 1rem;
  @media (max-width: 576px) {
    width: 4rem;
    margin-right: 0.5rem;
  }
`;
export const NavSearchWrapper = styled.div`
  width: 67%;
  margin-right: 1rem;
  @media (max-width: 576px) {
    width: 37%;
    margin-right: 1rem;
  }
`;

export const NavAnother = styled.div`
  width: 13%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 1200px) {
    width: 160px;
  }
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
export const IconSearch = styled(Icon)`
  height: 2.5rem;
  width: 2.5rem;
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
export const IconAnother = styled.div`
  font-size: 1.25rem;
  cursor: pointer;
  margin-left: 0.5rem;
`;
export const Avatar = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
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
  }
`;
export const Model = styled.div`
  position: absolute;
  width: 100%;
  left: -8.75rem;
  top: 4rem;
`;
export const InfoContent = styled.div`
  font-size: 1rem;
  position: absolute;
  right: -5rem;
  top: 2.65rem;
  width: 350px;
  min-height: 500px;
  background: ${(props) => props.theme.colors.primary};
  box-shadow: ${(props) => props.theme.shadow_drop.sm};
  border: 1px solid;
  border-radius: var(--border-sm);
  border-color: ${(props) => props.theme.colors.border};
`;
