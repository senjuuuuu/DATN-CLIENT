import styled from 'styled-components';

export const DropdownContainer = styled.div`
  z-index: 100;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 70%;
  border-top-left-radius: var(--border-sm);
  border-bottom-left-radius: var(--border-sm);
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.border};
  background: transparent;
  text-transform: capitalize;
  :active {
    box-shadow: none;
  }
  cursor: pointer;
`;
export const DropdownListContainer = styled.div`
  z-index: 100;
  margin-bottom: 1rem;
  position: absolute;
  top: 2.65rem;
  left: 0;
  box-shadow: ${(props) => props.theme.shadow_drop.sm};
  width: 100%;
  min-width: 213px;
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
export const ListItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0.15rem 0.75rem;
  width: 100%;
  cursor: pointer;
  transition: 0.35s ease;
  :hover {
    box-shadow: ${(props) => props.theme.shadow_inset};
    font-weight: 700;
    button {
      visibility: visible;
    }
  }
  @media (max-width: 768px) {
    padding-left: 0.5rem;
    padding-right: 0;
  }
`;
export const DropdownHeader = styled.div`
  color: var(--white);
  width: 100%;
  font-weight: 700;
  line-height: 2rem;
  display: flex;
  justify-content: space-between;
  span {
    margin-left: 1rem;
  }
  @media (max-width: 575px) {
    .iconHeader {
      margin-right: 0;
    }
  }
`;
export const TextHeader = styled.div`
  width: 90%;
  max-width: 150px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  padding-left: 1rem;
`;
export const IconHeader = styled.div`
  width: 10%;
  width: 2rem;
  font-size: 1.25rem;
`;
export const Thumbnail = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    border-radius: 0.25rem;
    object-fit: cover;
  }
`;
export const Name = styled.div`
  font-weight: 700;
  margin: 0.5rem;
`;
export const CreateTableWrapper = styled.div`
  display: sticky;
  top: 0;
  width: 100%;
`;
export const List = styled.div`
  max-height: 250px;
  overflow-y: scroll;
  width: 100%;
`;
export const ButtonItem = styled.button`
  position: absolute;
  right: 0.5rem;
  outline: none;
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.border};
  color: var(--gray);
  font-weight: 700;
  border-radius: var(--border-sm);
  box-shadow: ${(props) => props.theme.shadow_drop.sm};
  :active,
  :hover {
    box-shadow: ${(props) => props.theme.shadow_inset};
  }
  visibility: hidden;
`;
