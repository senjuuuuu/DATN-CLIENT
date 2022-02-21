import styled, { css } from 'styled-components';
import { BaseButton, BaseButtonLink } from 'theme';
import { Link } from 'react-router-dom';
export const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: auto;
  padding: 0.5rem;
  @media (min-width: 576px) and (max-width: 768px) {
    width: 50%;
  }
  @media (min-width: 768px) and (max-width: 1000px) {
    width: 60%;
  }
`;
export const SubContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: ${(props) => props.theme.shadow_drop.sm};
  border-radius: 0 1rem 1rem 0;
  overflow: hidden;
  width: calc(100% - 600px);
  position: relative;
  @media (max-width: 575px) {
    display: none;
  }
  @media (min-width: 576px) and (max-width: 768px) {
    width: 50%;
  }
  @media (min-width: 768px) and (max-width: 1000px) {
    width: 40%;
  }
`;
export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
export const Title = styled.h1`
  font-weight: 700;
  line-height: 2;
`;
export const SubTitle = styled.span`
  font-size: 0.875rem;
  letter-spacing: 0.25px;
  text-align: center;
  line-height: 1.6;
  padding-top: 0.25rem;
  a {
    font-style: italic;
    font-weight: 400;
    text-decoration: underline;
  }
`;
export const Social = styled.div`
  display: flex;
  padding-bottom: 1rem;
`;
export const SocialIcon = styled.span`
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.25rem;
  margin: 0 0.5rem;
  border-radius: var(--border-sm);
  box-shadow: ${(props) => props.theme.shadow_drop.sm};
  background-color: ${(props) => props.theme.colors.primary};
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.border};
  :hover,
  :active {
    box-shadow: ${(props) => props.theme.shadow_inset};
    cursor: pointer;
  }
`;
export const FormControl = styled.div`
  width: 350px;
  /* padding-bottom: 1rem; */
  padding-top: 0.5rem;
  @media (min-width: 576px) and (max-width: 768px) {
    width: 90%;
  }
`;
export const InputGroup = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border-radius: var(--border-sm);
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.border};
`;
export const Input = styled.input`
  font-size: 1rem;
  font-weight: 700;
  width: calc(100% - 40px);
  height: 100%;
  outline: none;
  background: transparent;
  border: none;
  border-left: 1px solid;
  border-color: ${(props) => props.theme.colors.border};
  border-top-right-radius: var(--border-sm);
  border-bottom-right-radius: var(--border-sm);
  padding-left: 0.75rem;
  padding-right: 0.8rem;
  color: ${(props) => props.theme.colors.input};
  ::placeholder {
    font-size: 0.85rem;
    font-weight: 900;
    /* font-style: italic; */
    color: ${(props) => props.theme.colors.input};
    opacity: 0.5;
  }
  :focus {
    box-shadow: ${(props) => props.theme.shadow_inset};
  }
`;
export const InputIcon = styled.div`
  width: 40px;
  height: calc(100% + 1px);
  font-size: 1.5rem;
  border-top-left-radius: var(--border-sm);
  border-bottom-left-radius: var(--border-sm);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: ${(props) => props.theme.shadow_drop.sm};
  @media (max-width: 920px) {
    font-size: 1.3rem;
  }
  @media (min-width: 576px) and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;
export const ALink = styled(Link)``;

export const Button = styled(BaseButton)`
  border-radius: var(--border-sm);
  margin-top: 1.5rem;
  span {
    margin-right: 0.25rem;
  }
  @media (min-width: 576px) and (max-width: 768px) {
    width: 80%;
  }
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.border};
`;

export const SubContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
interface CircleProps {
  position?: string;
}
export const Circle = styled.div<CircleProps>`
  width: 400px;
  height: 400px;
  box-shadow: ${(props) => props.theme.shadow_inset};
  position: absolute;
  border-radius: 50%;
  ${(props) =>
    props.position === 'top'
      ? css`
          top: -250px;
          left: -200px;
        `
      : props.position === 'right'
      ? css`
          top: -250px;
          right: -200px;
        `
      : css`
          bottom: -250px;
        `};
`;
export const ButtonLink = styled(BaseButtonLink)`
  border-radius: var(--border-sm);
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.border};
  span {
    margin-right: 0.25rem;
    text-align: center;
    align-items: center;
    align-self: center;
    vertical-align: center;
  }
  @media (min-width: 576px) and (max-width: 1000px) {
    width: 90%;
  }
`;
export const ErrorMessage = styled.p`
  color: var(--danger);
  font-size: 0.75rem;
  font-weight: 700;
  padding-left: 4%;
  padding-top: 0.25rem;
  margin-bottom: 0.25rem;
  span {
    margin-right: 0.6rem;
    font-size: 1rem;
  }
`;
export const FormCheck = styled(FormControl)`
  display: inline-block;
  position: relative;
  padding-left: 1.375rem;
  font-weight: 400;
  line-height: 16px;
  margin-bottom: 0;
  transition: all 0.2s ease;
  color: #44476a;
  cursor: pointer;
  padding-left: 5px;
  margin-right: 10px;
`;
export const FormCheckInput = styled.input`
  opacity: 0;
  position: absolute;
  visibility: hidden;
  box-sizing: border-box;
  padding: 0;
  margin-top: 0.3rem;
  margin-left: -1.25rem;
  overflow: visible;
  :checked + label:after {
    background-color: #e6e7ee;
    opacity: 1;
    font-size: 0.6rem;
    margin-top: 0;
    line-height: 1.6;
  }
`;
export const FormCheckLabel = styled.label`
  display: inline-block;
  position: relative;
  padding-left: 1.375rem;
  font-weight: 400;
  line-height: 16px;
  margin-bottom: 0;
  transition: all 0.2s ease;
  color: #44476a;
  font-size: 0.875rem;
  ::before,
  ::after {
    content: ' ';
    display: inline-block;
    position: absolute;
    width: 15px;
    height: 15px;
    left: 0;
    top: 0;
    background-color: #d1d9e6;
    border: 1px solid #b1bcce;
    transition: all 0.2s ease;
    border-radius: 50%;
    box-shadow: inset 1px 2px 2px #b8b9be, inset -5px -2px 4px #ffffff;
  }
  :hover {
    cursor: pointer;
  }
  ::after {
    background-color: #e6e7ee;
    opacity: 1;
    font-size: 0.6rem;
    margin-top: 0;
    line-height: 1.6;
    content: '\f00c';
    font-family: 'Font Awesome\ 5 Free';
    top: 0px;
    text-align: center;
    opacity: 0;
    color: #31344b;
    font-weight: 900;
    border: 0;
  }
`;
export const InfoMobile = styled(FormControl)`
  padding-top: 1rem;
  border-top: 1px solid ${(props) => props.theme.colors.border};
  text-align: center;
  font-weight: 700;
  a {
    font-weight: 700;
  }
  visibility: hidden;
  @media (max-width: 575px) {
    visibility: visible;
  }
`;
