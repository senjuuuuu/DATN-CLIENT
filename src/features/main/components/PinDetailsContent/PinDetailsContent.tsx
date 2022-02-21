import * as React from 'react';
import { FaUserPlus } from 'react-icons/fa';
import { HiDotsHorizontal } from 'react-icons/hi';
import { IoIosArrowDown } from 'react-icons/io';
import { TableDropdown, Comments, CommentForm } from 'features/main/components';
import * as SC from './PinDetailsContent.elements';
export interface IPinDetailsContentProps {}

export function PinDetailsContent(props: IPinDetailsContentProps) {
  return (
    <SC.Wrapper>
      <SC.Container>
        <SC.LeftSide>
          <img src="https://i.pinimg.com/564x/cd/5c/61/cd5c61da4b6ba0dba2a48aa5ac485b06.jpg" alt="" />
        </SC.LeftSide>
        <SC.RightSide>
          <SC.Section1>
            <SC.Icon>
              <HiDotsHorizontal />
            </SC.Icon>
            <SC.SelectGroup>
              <TableDropdown />
              <SC.ButtonSelect>Save</SC.ButtonSelect>
            </SC.SelectGroup>
          </SC.Section1>
          <SC.Section2>
            <SC.UrlContainer>link.com.cn</SC.UrlContainer>
            <SC.TitleContainer>Title abala abala fffffffffffffffffffffffffffffffff trap</SC.TitleContainer>
            <SC.DescriptionContainer>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, iusto!
            </SC.DescriptionContainer>
            <SC.UserWrapper>
              <SC.InfoContainer>
                <SC.AvatarContainer>
                  <img src="https://i.pinimg.com/236x/9b/32/4c/9b324c8be94520bc2eb8df268e5c711f.jpg" alt="" />
                </SC.AvatarContainer>
                <SC.ContentContainer>
                  <SC.NameContainer>Khanh Pham</SC.NameContainer>
                  <SC.TotalFollowerContainer>1250 follower</SC.TotalFollowerContainer>
                </SC.ContentContainer>
              </SC.InfoContainer>
              <SC.Icon>
                <FaUserPlus fontSize="1.25rem" />
              </SC.Icon>
            </SC.UserWrapper>
          </SC.Section2>
          <SC.Section3>
            <SC.TitleComment>
              Comments
              <span>
                <IoIosArrowDown />
              </span>
            </SC.TitleComment>
            <CommentForm />
            <Comments />
          </SC.Section3>
        </SC.RightSide>
      </SC.Container>
    </SC.Wrapper>
  );
}
