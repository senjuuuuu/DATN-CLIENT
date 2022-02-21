import * as React from 'react';
import * as SC from './Conversation.elements';

export interface IConversationProps {}

export function Conversation(props: IConversationProps) {
  return (
    <SC.ConversationWrapper>
      <SC.ConversationContainer>
        <SC.LeftSide>
          <SC.Avatar>
            <img src="https://i.pinimg.com/474x/90/5a/91/905a91907de0ecdb13cca02529d0936e.jpg" alt="" />
          </SC.Avatar>
        </SC.LeftSide>
        <SC.RightSide className="right_side">
          <SC.Title>Khanh Pham</SC.Title>
          <SC.Content>
            <SC.Text>How old are youfffffffffffffffffffffffffffffffffffffffff?</SC.Text>
            <SC.Time>time</SC.Time>
          </SC.Content>
        </SC.RightSide>
      </SC.ConversationContainer>
    </SC.ConversationWrapper>
  );
}
