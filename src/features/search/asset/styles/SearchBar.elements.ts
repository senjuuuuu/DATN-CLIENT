import styled from 'styled-components';
export const SearchBarWrapper = styled.div`
  width: 100%;
  height: 2.5rem;
  /* position: relative; */
`;
export const Icon = styled.div`
  font-size: 1.25rem;
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
  @media (min-width: 576px) {
    display: none;
  }
`;
export const FormContainer = styled.div`
  @media (max-width: 576px) {
    display: none;
  }
`;
