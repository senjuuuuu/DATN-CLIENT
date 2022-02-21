import * as React from 'react';
import * as SC from './CommentDetails.elements';
import { CommentAction, CommentReply } from 'features/main/components';
export interface ICommentDetailsProps {
  text: string;
}

export function CommentDetails(props: ICommentDetailsProps) {
  return (
    <SC.CommentContainer>
      <SC.CommentAvatar>
        <img src="https://i.pinimg.com/236x/9b/32/4c/9b324c8be94520bc2eb8df268e5c711f.jpg" alt="" />
      </SC.CommentAvatar>
      <SC.CommentContentWrapper>
        <SC.CommentName>Khanh Pham</SC.CommentName>
        <SC.CommentContent>{props.text}</SC.CommentContent>
        <CommentAction />
        <CommentReply />
      </SC.CommentContentWrapper>
    </SC.CommentContainer>
  );
}
