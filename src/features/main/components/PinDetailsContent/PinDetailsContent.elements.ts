import styled from 'styled-components';

export const Section3 = styled.div``;
export const TitleComment = styled.div`
  cursor: pointer;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;
export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  /* height: 5rem; */
  border-radius: var(--border-sm);
  background: ${(props) => props.theme.colors.primary};
  border: 2px solid;
  box-shadow: ${(props) => `${props.theme.shadow_drop.sm},${props.theme.shadow_inset}`};
  border-color: ${(props) => props.theme.colors.border};
  padding: 0.5rem;
`;
export const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
`;
export const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 0.5rem;
`;
export const NameContainer = styled.span`
  font-weight: 700;
`;
export const TotalFollowerContainer = styled.span`
  font-size: 0.75rem;
  font-weight: 600;
`;
export const AvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 3.5rem;
  height: 3.5rem;
  background: ${(props) => props.theme.colors.primary};
  border: 2px solid;
  box-shadow: ${(props) => `${props.theme.shadow_drop.sm},${props.theme.shadow_inset}`};
  border-radius: var(--border-xl);
  border-color: ${(props) => props.theme.colors.border};
  img {
    border-radius: var(--rounded);
    object-fit: cover;
    max-width: 3rem;
    max-height: 3rem;
  }
`;
export const UrlContainer = styled.a`
  font-style: italic;
`;
export const TitleContainer = styled.div`
  font-weight: 700;
  font-size: 2rem;
  overflow-wrap: break-word;
`;
export const DescriptionContainer = styled.span`
  font-size: 0.85rem;
`;
export const Wrapper = styled.div`
  /* padding: 35px; */
  width: 880px;
  height: auto;
  border-radius: var(--border-md);
  box-shadow: ${(props) => props.theme.shadow_drop.sm};
  @media (max-width: 901px) {
    width: 95%;
  }
`;
export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  @media (max-width: 670px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const Side = styled.div`
  width: 50%;
  height: 100%;
`;
export const LeftSide = styled(Side)`
  img {
    width: 100%;
    object-fit: auto;
    border-top-left-radius: var(--border-md);
    border-bottom-left-radius: var(--border-md);
    @media (max-width: 670px) {
      border-radius: var(--border-md);
    }
  }
`;
export const RightSide = styled(Side)`
  padding: 20px;
  @media (max-width: 670px) {
    width: 100%;
  }
`;
export const Section1 = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Section2 = styled.div`
  margin: 1rem 0;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const SelectGroup = styled.div`
  width: 80%;
  height: 2.5rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
export const Button = styled.button`
  outline: none;
  width: 100%;
  height: 2.5rem;
  border-radius: var(--border-lg);
  box-shadow: ${(props) => props.theme.shadow_drop.sm};
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.border};
  :active,
  :hover {
    box-shadow: ${(props) => props.theme.shadow_inset};
  }
`;
export const ButtonSelect = styled(Button)`
  width: 20%;
  height: 100%;
  border-radius: 0 var(--border-sm) var(--border-sm) 0;
`;
export const Icon = styled.div`
  height: 2.5rem;
  width: 2.5rem;
  font-size: 1.5rem;
  margin-right: 0.25rem;
  box-shadow: ${(props) => props.theme.shadow_drop.sm};
  border-radius: var(--rounded);
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.border};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :active,
  :hover {
    box-shadow: ${(props) => props.theme.shadow_inset};
  }
`;
