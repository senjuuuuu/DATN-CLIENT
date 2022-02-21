import * as React from 'react';
import { ButtonLink, Circle, SubContentContainer, SubContentWrapper } from '../asset/styles';

export interface ISubContentProps {
  position_1: string;
  position_2: string;
  title: string;
  subTitle: string;
  linkTo: string;
  linkColor: string;
  linkTitle: string;
}

export function SubContent({
  position_1,
  position_2,
  title,
  subTitle,
  linkTo,
  linkColor,
  linkTitle,
}: ISubContentProps) {
  return (
    <SubContentWrapper>
      <Circle position={position_1} />
      <Circle position={position_2} />
      <SubContentContainer>
        <h3>{title}</h3>
        <p>{subTitle}</p>
        <ButtonLink to={linkTo} color={linkColor}>
          {linkTitle}
        </ButtonLink>
      </SubContentContainer>
    </SubContentWrapper>
  );
}
