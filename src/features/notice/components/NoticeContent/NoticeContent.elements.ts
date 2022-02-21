import { Link } from 'react-router-dom';
import styled from 'styled-components';
export const NoticeContentWrapper = styled.div`
  width: 100%;
  /* height: 3rem; */
  padding: 0.5rem;
  cursor: pointer;
  :hover {
    box-shadow: ${(props) => props.theme.shadow_inset};
  }
  display: flex;
  flex-direction: column;
`;
export const NoticeContentContainer = styled(Link)`
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
  display: inline-block;
`;
export const Text = styled.span`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  font-size: 0.9rem;
`;
export const Time = styled.span`
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--gray-600);
  text-transform: lowercase;
`;
export const ImageWrapper = styled.div`
  padding-top: 0.5rem;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
export const ImageContainer = styled.div`
  width: 20%;
  img {
    width: 100%;
    border-radius: var(--border-md);
    object-fit: cover;
  }
`;
