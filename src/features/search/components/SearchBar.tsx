import { SearchBarWrapper, Icon, FormContainer } from '../asset/styles/SearchBar.elements';
import { useClickOutside } from 'hooks/useClickOutside';
import { SearchContent, FormSearch } from '.';
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

export function SearchBar() {
  const [searchContentWrapper, setSearchContentWrapper] = useState(false);
  let node = useClickOutside(() => setSearchContentWrapper(false));
  return (
    <SearchBarWrapper ref={node}>
      <Icon onClick={() => setSearchContentWrapper(!searchContentWrapper)}>
        <FaSearch />
      </Icon>
      <FormContainer>
        <FormSearch focusClick={true} setSearchContentWrapper={setSearchContentWrapper} />
      </FormContainer>
      {searchContentWrapper && <SearchContent />}
    </SearchBarWrapper>
  );
}
