import * as React from 'react';
import * as SC from './NoticeContent.elements';

export interface IContentProps {}

export function NoticeContent(props: IContentProps) {
  return (
    <SC.NoticeContentWrapper>
      <SC.NoticeContentContainer to="/notice/:id">
        <SC.LeftSide>
          <SC.Avatar>
            <img src="https://i.pinimg.com/474x/90/5a/91/905a91907de0ecdb13cca02529d0936e.jpg" alt="" />
          </SC.Avatar>
        </SC.LeftSide>
        <SC.RightSide>
          <SC.Content>
            <SC.Text>Lorem ipsum dolor sit,</SC.Text>
            <SC.Time>time</SC.Time>
          </SC.Content>
        </SC.RightSide>
      </SC.NoticeContentContainer>
      <SC.ImageWrapper>
        <SC.ImageContainer></SC.ImageContainer>
      </SC.ImageWrapper>
    </SC.NoticeContentWrapper>
  );
}
