import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const BaseContainer = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  max-width: 1300px;
  z-index: 1;
`;
export const FlexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
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
  border: none;
  outline: none;
  box-shadow: ${(props) => (props.disable ? props.theme.shadow_inset : props.theme.shadow_drop.sm)};
  font-weight: 900;
  font-size: 1.25rem;
  color: ${(props) => `var(--${props.color})`};
  border: 1px solid ${(props) => (props.color ? `var(--${props.color})` : props.theme.colors.border)};
  margin: 1rem 0;
  :hover,
  :active {
    box-shadow: ${(props) => props.theme.shadow_inset};
  }
`;
export const BaseButtonLink = styled(Link)`
  width: 300px;
  height: 40px;
  background: transparent;
  border-radius: var(--border-sm);
  border: none;
  outline: none;
  box-shadow: ${(props) => props.theme.shadow_drop.sm};
  font-weight: 900;
  font-size: 1.25rem;
  color: ${(props) => `var(--${props.color})`};
  margin: 1rem 0;
  :hover,
  :active {
    box-shadow: ${(props) => props.theme.shadow_inset};
    color: ${(props) => `var(--${props.color})`};
  }
  text-align: center;
  line-height: 40px;
`;
