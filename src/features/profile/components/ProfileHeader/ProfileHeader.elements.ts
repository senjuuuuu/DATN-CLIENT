import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem 0;
  width: 100%;
  height: 100%;
`;
export const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 9rem;
  height: 9rem;
  padding: 0.5rem;
  border-radius: var(--rounded);
  background: ${(props) => props.theme.colors.primary};
  border: 2px solid;
  box-shadow: ${(props) => `${props.theme.shadow_drop.sm},${props.theme.shadow_inset}`};
  border-color: ${(props) => props.theme.colors.border};
  img {
    border-radius: var(--rounded);
    width: 100%;
    max-width: 7.5rem;
    max-height: 7.5rem;
    object-fit: cover;
  }
`;
export const Name = styled.h1`
  font-weight: 700;
`;
export const Email = styled.div`
  font-weight: 600;
  font-style: italic;
  padding: 0.5rem 1rem;
  border-radius: var(--border-sm);
  background: ${(props) => props.theme.colors.primary};
  border: 2px solid;
  box-shadow: ${(props) => `${props.theme.shadow_drop.sm},${props.theme.shadow_inset}`};
  border-color: ${(props) => props.theme.colors.border};
`;
export const InfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  width: 100%;
  height: 100%;
`;
export const FollowStyle = styled.span`
  padding: 0.5rem;
  border: 1px solid;
  border-radius: var(--border-sm);
  border-color: ${(props) => props.theme.colors.primary};
  :hover {
    box-shadow: ${(props) => props.theme.shadow_inset};
    cursor: pointer;
    border-color: ${(props) => props.theme.colors.border};
    font-weight: 600;
  }
`;
export const FollowerContainer = styled(FollowStyle)`
  margin-left: 1rem;
  position: relative;
`;
export const FollowingContainer = styled(FollowStyle)`
  margin-right: 1rem;
  position: relative;
`;
