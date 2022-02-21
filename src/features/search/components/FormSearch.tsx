import * as React from 'react';
import { Form, Input, InputGroup, InputIconLeft, InputIconRight } from '../asset/styles/FormSearch.elements';
import { FaSearch, FaTimes } from 'react-icons/fa';

export interface IFormSearchProps {
  setSearchContentWrapper: React.Dispatch<React.SetStateAction<boolean>>;
  focusClick: boolean;
}

export function FormSearch(props: IFormSearchProps) {
  return (
    <Form action="">
      <InputGroup>
        <InputIconLeft>
          <FaSearch />
        </InputIconLeft>
        <Input placeholder="Search" onFocus={() => props.focusClick && props.setSearchContentWrapper(true)} />
        <InputIconRight>
          <FaTimes />
        </InputIconRight>
      </InputGroup>
    </Form>
  );
}
