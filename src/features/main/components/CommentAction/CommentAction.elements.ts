import styled from 'styled-components';

export const CommentActionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const ActionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 0.65rem;
  font-weight: 700;
  span {
    cursor: pointer;
  }
`;
export const Side = styled.div`
  display: flex;
  align-items: center;
  span {
    margin: 0 0.25rem;
    display: flex;
    align-items: center;
  }
`;
export const LeftAction = styled(Side)``;
export const RightAction = styled(Side)``;
