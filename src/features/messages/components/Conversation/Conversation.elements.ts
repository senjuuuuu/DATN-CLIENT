import styled from 'styled-components';

export const ConversationWrapper = styled.div`
  width: 100%;
  /* height: 3rem; */
  padding: 0.25rem 0.5rem;
  cursor: pointer;
  :hover {
    box-shadow: ${(props) => props.theme.shadow_inset};
  }
`;
export const ConversationContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;
export const LeftSide = styled.div`
  width: 15%;
`;
export const RightSide = styled.div`
  width: 85%;
  padding: 0.25rem 0.5rem;
  display: flex;
  flex-direction: column;
  margin-left: 0.5rem;
`;
export const Avatar = styled.div`
  width: 3rem;
  height: 3rem;
  background: ${(props) => props.theme.colors.primary};
  border: 2px solid;
  box-shadow: ${(props) => `${props.theme.shadow_drop.sm},${props.theme.shadow_inset}`};
  border-radius: var(--border-xl);
  border-color: ${(props) => props.theme.colors.border};
  img {
    border-radius: var(--rounded);
  }
`;
export const Title = styled.div`
  font-weight: 700;
  max-width: 200px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
export const Content = styled.div`
  display: flex;
  align-items: center;
`;
export const Text = styled.div`
  max-width: 200px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-size: 0.9rem;
`;
export const Time = styled.div`
  font-size: 0.75rem;
  font-weight: 700;
  margin-left: 1rem;
  color: var(--gray-600);
`;
