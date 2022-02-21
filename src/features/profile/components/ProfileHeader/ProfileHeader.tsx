import * as React from 'react';
import * as SC from './ProfileHeader.elements';
import { FollowList } from './FollowList';
export interface IHeaderProps {}

export function ProfileHeader(props: IHeaderProps) {
  return (
    <SC.HeaderWrapper>
      <SC.Avatar>
        <img src="https://i.pinimg.com/236x/49/cf/58/49cf58299bf4b0eaff6d8a91d8f6bd81.jpg" alt="" />
      </SC.Avatar>
      <SC.Name>Senjuuuuu Khanh</SC.Name>
      <SC.Email>@senjuuuu</SC.Email>
      <SC.InfoWrapper>
        <SC.FollowingContainer>
          <FollowList />
        </SC.FollowingContainer>
        <SC.FollowerContainer>
          <FollowList />
        </SC.FollowerContainer>
      </SC.InfoWrapper>
    </SC.HeaderWrapper>
  );
}
