import * as React from 'react';
import { useClickOutside } from 'hooks/useClickOutside';
import * as SC from 'features/main/components/TableDropdown/TableDropdown.elements';
import styled from 'styled-components';

export interface ITableDropdownProps {}

const names = [
  { name: 'dfsd', img: 'https://tse1.mm.bing.net/th?id=OIP.fq_1jQECoeuZpAUiZCfXtQHaFw&pid=Api&P=0&w=218&h=169' },
  { name: 'dfdsfsd', img: 'https://tse1.mm.bing.net/th?id=OIP.fq_1jQECoeuZpAUiZCfXtQHaFw&pid=Api&P=0&w=218&h=169' },
  { name: 'sdfsd', img: 'https://tse1.mm.bing.net/th?id=OIP.fq_1jQECoeuZpAUiZCfXtQHaFw&pid=Api&P=0&w=218&h=169' },
];
export function FollowList(props: ITableDropdownProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  let node = useClickOutside(() => setIsOpen(false));
  const onOptionClicked = (name: any) => {
    setIsOpen(false);
  };
  return (
    <Wrapper ref={node} onClick={() => setIsOpen(!isOpen)}>
      12222
      {isOpen && (
        <SC.DropdownListContainer>
          <SC.List>
            {names.map((value, key) => (
              <SC.ListItem key={key} onClick={() => onOptionClicked(value)}>
                <SC.Thumbnail>
                  <img src={value.img} alt="" />
                </SC.Thumbnail>
                <SC.Name>{value.name}</SC.Name>
              </SC.ListItem>
            ))}
          </SC.List>
        </SC.DropdownListContainer>
      )}
    </Wrapper>
  );
}
export const Wrapper = styled.div`
  width: 100%;
  /* position: relative; */
`;
export const Container = styled(SC.DropdownListContainer)``;
