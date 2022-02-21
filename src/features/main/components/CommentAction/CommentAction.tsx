import * as React from 'react';
import { AiOutlineHeart, AiOutlineLike } from 'react-icons/ai';
import { CommentForm } from '..';
import * as SC from './CommentAction.elements';
export interface ICommentActionProps {}

export function CommentAction(props: ICommentActionProps) {
  const [openForm, setOpenForm] = React.useState(false);
  return (
    <SC.CommentActionWrapper>
      <SC.ActionContainer>
        <SC.LeftAction>
          <span>
            12
            <AiOutlineHeart />
          </span>
          <span onClick={() => setOpenForm(true)}>Reply</span>
        </SC.LeftAction>
        <SC.RightAction>
          <span>
            <AiOutlineLike />
            Tien ich
          </span>
          <span>12</span>
        </SC.RightAction>
      </SC.ActionContainer>
      {openForm && <CommentForm setOpenForm={setOpenForm} />}
    </SC.CommentActionWrapper>
  );
}
