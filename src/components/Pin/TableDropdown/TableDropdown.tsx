import * as React from 'react';
import { useClickOutside } from 'hooks/useClickOutside';
import { MdOutlineAddCircleOutline } from 'react-icons/md';
import { IoMdArrowDropdown, IoMdArrowUp } from 'react-icons/io';
import * as SC from './TableDropdown.elements';

export interface ITableDropdownProps {}

const names = [
  { name: 'dfsd', img: 'https://tse1.mm.bing.net/th?id=OIP.fq_1jQECoeuZpAUiZCfXtQHaFw&pid=Api&P=0&w=218&h=169' },
  { name: 'dfdsfsd', img: 'https://tse1.mm.bing.net/th?id=OIP.fq_1jQECoeuZpAUiZCfXtQHaFw&pid=Api&P=0&w=218&h=169' },
  { name: 'sdfsd', img: 'https://tse1.mm.bing.net/th?id=OIP.fq_1jQECoeuZpAUiZCfXtQHaFw&pid=Api&P=0&w=218&h=169' },
];
export function TableDropdown(props: ITableDropdownProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedOption, setSelectedOption] = React.useState(names[0]);
  let node = useClickOutside(() => setIsOpen(false));
  const onOptionClicked = (name: any) => {
    setIsOpen(false);
    setSelectedOption(name);
  };
  return (
    <SC.DropdownContainer ref={node} onClick={() => setIsOpen(!isOpen)}>
      <SC.DropdownHeader>
        <SC.TextHeader>{selectedOption.name}</SC.TextHeader>
        <SC.IconHeader>{isOpen ? <IoMdArrowUp /> : <IoMdArrowDropdown />}</SC.IconHeader>
      </SC.DropdownHeader>
      {isOpen && (
        <SC.DropdownListContainer>
          <SC.CreateTableWrapper>
            <SC.ListItem>
              <SC.Thumbnail>
                <MdOutlineAddCircleOutline />
              </SC.Thumbnail>
              <SC.Name>Create new table</SC.Name>
            </SC.ListItem>
          </SC.CreateTableWrapper>
          <SC.List>
            {names.map((value, key) => (
              <SC.ListItem key={key} onClick={() => onOptionClicked(value)}>
                <SC.Thumbnail>
                  <img src={value.img} alt="" />
                </SC.Thumbnail>
                <SC.Name>{value.name}</SC.Name>
                <SC.ButtonItem>Save</SC.ButtonItem>
              </SC.ListItem>
            ))}
          </SC.List>
        </SC.DropdownListContainer>
      )}
    </SC.DropdownContainer>
  );
}
