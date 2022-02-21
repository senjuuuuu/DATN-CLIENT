import styled from 'styled-components';

export const CommentContainer = styled.div`
  margin-top: 0.25rem;
  width: 100%;
  display: flex;
  align-items: flex-start;
`;
export const CommentContentWrapper = styled.div`
  width: 100%;
  min-width: 200px;
  font-size: 0.8rem;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 0.5rem;
  border: 2px solid;
  border-radius: var(--border-sm);
  border-color: ${(props) => props.theme.colors.border};
`;
export const CommentAvatar = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  min-width: 2.5rem;
  min-height: 2.5rem;
  background: ${(props) => props.theme.colors.primary};
  border: 2px solid;
  box-shadow: ${(props) => `${props.theme.shadow_drop.sm},${props.theme.shadow_inset}`};
  border-radius: var(--rounded);
  border-color: ${(props) => props.theme.colors.border};
  img {
    border-radius: var(--rounded);
    object-fit: cover;
    max-width: 2rem;
    max-height: 2rem;
  }
`;
export const CommentName = styled.span`
  font-weight: 700;
`;
export const CommentContent = styled.span`
  overflow-wrap: break-word;
`;
