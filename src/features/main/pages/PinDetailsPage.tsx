import * as React from 'react';
import styled from 'styled-components';
import { PinDetailsContent } from 'features/main/components';
export interface IPinDetailsProps {}

export default function PinDetails(props: IPinDetailsProps) {
  return (
    <Wrapper>
      <PinDetailsContent />
    </Wrapper>
  );
}
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  width: 100%;
  height: 100%;
`;
