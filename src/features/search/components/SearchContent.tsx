import * as React from 'react';
import { FormSearchMobile, SearchContentWrapper, Container } from '../asset/styles/SearchContent.elements';
import { FormSearch } from '.';

export function SearchContent() {
  const [focusForm, setFocusForm] = React.useState(false);
  return (
    <SearchContentWrapper>
      <Container>
        <FormSearchMobile>
          <FormSearch focusClick={focusForm} setSearchContentWrapper={setFocusForm} />
        </FormSearchMobile>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic libero perspiciatis repellat adipisci, quos dolore
        ab ut at aliquam laborum culpa! Quam consequuntur beatae laboriosam nesciunt voluptatem, velit expedita ipsum?
      </Container>
    </SearchContentWrapper>
  );
}
