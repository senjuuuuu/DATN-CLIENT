import * as React from 'react';
import { CommentAction } from 'features/main/components';
import * as SC from './CommentReply.elements';

export function CommentReply() {
  return (
    <SC.CommentContainer>
      <SC.CommentAvatar>
        <img src="https://i.pinimg.com/236x/9b/32/4c/9b324c8be94520bc2eb8df268e5c711f.jpg" alt="" />
      </SC.CommentAvatar>
      <SC.CommentContentWrapper>
        <SC.CommentName>Khanh Pham</SC.CommentName>
        <SC.CommentContent>
          @Khanh Pham asssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
        </SC.CommentContent>
        <CommentAction />
      </SC.CommentContentWrapper>
    </SC.CommentContainer>
  );
}
