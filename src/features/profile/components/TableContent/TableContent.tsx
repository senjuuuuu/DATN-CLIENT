import * as React from 'react';
import * as SC from './TableContent.elements';

export interface ITableContentProps {}

export function TableContent(props: ITableContentProps) {
  return (
    <SC.TableWrapper to="/kh">
      <SC.ImgContainer>
        <SC.ImgItem className="one">
          <img src="https://i.pinimg.com/236x/e0/49/b8/e049b82a23083659c62215caedd8440f.jpg" alt="" />
        </SC.ImgItem>
        <SC.Side>
          <SC.ImgItem className="two">
            <img src="https://i.pinimg.com/564x/da/98/9b/da989b08a85b561fa456b07c9c436953.jpg" alt="" />
          </SC.ImgItem>
          <SC.ImgItem className="three">
            <img src="https://i.pinimg.com/564x/da/98/9b/da989b08a85b561fa456b07c9c436953.jpg" alt="" />
          </SC.ImgItem>
        </SC.Side>
      </SC.ImgContainer>
      <SC.InfoWrapper>
        <SC.TableName>Table Nameddddddddddddddddddddddddd</SC.TableName>
        <SC.InfoContainer>
          <SC.Total>1520 pin</SC.Total>
          <SC.Time>1 day</SC.Time>
        </SC.InfoContainer>
      </SC.InfoWrapper>
    </SC.TableWrapper>
  );
}
