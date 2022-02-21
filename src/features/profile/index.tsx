import * as React from 'react';
import styled from 'styled-components';
import { ProfileHeader, TableContent } from './components';
export interface IProfileFeautureProps {}

export default function ProfileFeature(props: IProfileFeautureProps) {
  return (
    <Wrapper>
      <ProfileHeader />
      <ContentWrapper>
        <ContentContainer>
          <TableContent />
          <TableContent />
          <TableContent />
          <TableContent />
          <TableContent />
          <TableContent />
        </ContentContainer>
      </ContentWrapper>
    </Wrapper>
  );
}
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;
export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  padding: 0.5rem 0;
`;
export const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;
  @media (min-width: 0px) and (max-width: 500px) {
    max-width: 504px;
    grid-template-columns: repeat(1, 1fr);
  }
  @media (min-width: 501px) and (max-width: 755px) {
    max-width: 504px;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 756px) and (max-width: 1007px) {
    max-width: 756px;
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1008px) and (max-width: 1259px) {
    max-width: 1008px;
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: 1260px) and (max-width: 1511px) {
    max-width: 1260px;
    grid-template-columns: repeat(5, 1fr);
  }
  @media (min-width: 1512px) and (max-width: 1763px) {
    max-width: 1512px;
    grid-template-columns: repeat(6, 1fr);
  }
  @media (min-width: 1762px) and (max-width: 2015px) {
    max-width: 1764px;
    grid-template-columns: repeat(7, 1fr);
  }
`;
