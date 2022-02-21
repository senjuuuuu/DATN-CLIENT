import * as React from 'react';
import styled from 'styled-components';
import { CommentDetails } from 'features/main/components';

export interface ICommentsProps {}

export function Comments(props: ICommentsProps) {
  return (
    <CommentWrapper>
      <CommentDetails text="lorem dfdsssssssssssssssssssssssdddddddddddddddddddddddddddddddddddddddddddddddd" />
      <CommentDetails text="sdsd fdsssssssssssssssssssssssssssssssssss" />
    </CommentWrapper>
  );
}
export const CommentWrapper = styled.div`
  width: 100%;
  max-height: 500px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;
