import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const TableWrapper = styled(Link)`
  min-width: 230px;
  min-height: 204px;
  box-sizing: border-box;
  cursor: pointer;
  border-radius: var(--border-sm);
  box-shadow: ${(props) => props.theme.shadow_drop.sm};
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.border};
  transition: 0.35s ease-in-out;
  :hover {
    box-shadow: ${(props) => props.theme.shadow_inset};
  }
`;
export const ImgContainer = styled.div`
  cursor: zoom-in;
  padding: 0.25rem;
  width: 100%;
  height: 152px;
  max-height: 152px;
  display: grid;
  grid-gap: 1px;
  grid-template-columns: 2fr 1fr;
  .one {
    max-width: 152px;
    max-height: 152px;
    img {
      max-width: 152px;
      max-height: 152px;
      object-fit: cover;
      border-top-left-radius: var(--border-sm);
      border-bottom-left-radius: var(--border-sm);
    }
  }
  .two {
    img {
      border-top-right-radius: var(--border-sm);
    }
  }
  .three {
    img {
      border-bottom-right-radius: var(--border-sm);
    }
  }
`;
export const ImgItem = styled.div`
  img {
    object-fit: cover;
    max-width: 75px;
    max-height: 75px;
    float: right;
  }
`;
export const Side = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-gap: 1px;
`;
export const InfoWrapper = styled.div`
  height: calc(100% - 152px);
  padding: 0.5rem;
  max-width: 175px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
export const TableName = styled.span`
  font-weight: 900;
`;
export const Total = styled.span`
  font-weight: 700;
`;
export const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  span {
    font-size: 0.75rem;
  }
`;
export const Time = styled.span``;
