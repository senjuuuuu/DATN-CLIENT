import * as React from 'react';
import { GiAngryEyes } from 'react-icons/gi';
import { SearchBar } from 'features/search/components';
import { AiOutlineSetting, AiOutlineLogout } from 'react-icons/ai';
import { MenuList } from '../MenuList/MenuList';
import { MessagesFeature } from 'features/messages';
import { NoticeFeature } from 'features/notice';
import { Dropdown } from 'components/common';
import * as SC from './NavBar.elements';
import { useAppDispatch } from 'app/hooks';
import { authActions } from 'features/auth/authSlice';

export default function NavBar() {
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(authActions.logout());
  };
  React.useEffect(() => {});
  return (
    <SC.NavBarWrapper>
      <SC.NavLogoWrapper to="/">
        <span>
          <GiAngryEyes />
        </span>
        <span>qkp</span>
      </SC.NavLogoWrapper>
      <SC.NavMenuWrapper>
        <MenuList />
      </SC.NavMenuWrapper>
      <SC.NavSearchWrapper>
        <SearchBar />
      </SC.NavSearchWrapper>
      <SC.NavAnother>
        <NoticeFeature />
        <MessagesFeature />
        <SC.Avatar to="/profile/:id">
          <img src="https://i.pinimg.com/474x/90/5a/91/905a91907de0ecdb13cca02529d0936e.jpg" alt="" />
        </SC.Avatar>
        <SC.IconAnother>
          <Dropdown>
            <SC.DropdownList>
              <SC.ListItem>
                <span>
                  <AiOutlineSetting />
                </span>
                Setting
              </SC.ListItem>
              <SC.ListItem onClick={handleLogout}>
                <span>
                  <AiOutlineLogout />
                </span>
                Logout
              </SC.ListItem>
              <SC.ListItem>More</SC.ListItem>
            </SC.DropdownList>
          </Dropdown>
        </SC.IconAnother>
      </SC.NavAnother>
    </SC.NavBarWrapper>
  );
}
