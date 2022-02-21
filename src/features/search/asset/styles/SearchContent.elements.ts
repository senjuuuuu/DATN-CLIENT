import styled from 'styled-components';

export const SearchContentWrapper = styled.div`
  position: absolute;
  cursor: default;
  width: 90%;
  left: 50%;
  right: 50%;
  transform: translateX(-50%);
  top: 4rem;
`;
export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 1rem;
  background: ${(props) => props.theme.colors.primary};
  box-shadow: ${(props) => props.theme.shadow_drop.sm};
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.border};
  border-radius: var(--border-sm);
`;
export const FormSearchMobile = styled.div`
  display: none;
  @media (max-width: 576px) {
    display: flex;
  }
`;
