import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;
export const Side = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 500px) {
    width: 100%;
  }
`;
export const LeftSide = styled(Side)`
  @media (max-width: 500px) {
    margin-bottom: 1rem;
  }
`;
export const RightSide = styled(Side)``;
export const Section1 = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
`;
export const Section2 = styled.div`
  width: 90%;
  margin: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--border-md);
  box-shadow: ${(props) => props.theme.shadow_drop.sm};
  padding: 10px;
  @media (max-width: 500px) {
    width: 100%;
  }
`;
export const Section3 = styled(Section1)`
  width: 90%;
`;
export const Button = styled.button`
  color: var(--gray);
  font-weight: 700;
  outline: none;
  width: 100%;
  height: 2.5rem;
  border-radius: var(--border-sm);
  box-shadow: ${(props) => props.theme.shadow_drop.sm};
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.border};
  :active,
  :hover {
    box-shadow: ${(props) => props.theme.shadow_inset};
  }
`;
type LabelType = {
  status: Boolean;
};
export const Label = styled.label<LabelType>`
  cursor: pointer;
  height: 510px;
  width: 340px;
  border: 2px solid;
  border-style: dashed;
  margin: 0;
  border-radius: var(--border-sm);
  /* border-color: ${(props) => props.theme.colors.border}; */
  display: ${(props) => (props.status ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  flex-direction: column;
  input {
    display: none;
  }
  span {
    text-align: center;
  }
`;
export const SelectGroup = styled.div`
  width: 100%;
  height: 2.5rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
export const ButtonSelect = styled(Button)`
  width: 20%;
  height: 100%;
  border-radius: 0 var(--border-sm) var(--border-sm) 0;
`;

export const Icon = styled.div`
  height: 2.5rem;
  width: 2.5rem;
  font-size: 1.5rem;
  margin-right: 0.25rem;
  box-shadow: ${(props) => props.theme.shadow_drop.sm};
  border-radius: var(--rounded);
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.border};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :active,
  :hover {
    box-shadow: ${(props) => props.theme.shadow_inset};
  }
`;
export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  label {
    margin-bottom: 1rem;
    text-transform: capitalize;
    font-size: 1.5rem;
    font-weight: 700;
  }
`;
export const FormControl = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;
  @media (min-width: 576px) and (max-width: 768px) {
    width: 90%;
  }
  height: 3rem;
  #url {
    font-size: 1rem;
  }
`;
export const Input = styled.input`
  font-size: 1.25rem;
  font-weight: 700;
  width: 100%;
  height: 100%;
  outline: none;
  background: transparent;
  border: none;
  border-left: 1px solid;
  border-color: ${(props) => props.theme.colors.border};
  border-radius: var(--border-sm);
  padding: 0.75rem;
  color: ${(props) => props.theme.colors.input};
  ::placeholder {
    font-weight: 300;
    font-style: italic;
    color: ${(props) => props.theme.colors.input};
    opacity: 0.5;
  }
  box-shadow: ${(props) => props.theme.shadow_inset};
`;
export const Textarea = styled.textarea`
  font-size: 2rem;
  font-weight: 700;
  width: 100%;
  outline: none;
  background: transparent;
  border: none;
  border-left: 1px solid;
  border-color: ${(props) => props.theme.colors.border};
  border-radius: var(--border-sm);
  padding: 0.75rem;
  color: ${(props) => props.theme.colors.input};
  ::placeholder {
    font-weight: 300;
    font-style: italic;
    color: ${(props) => props.theme.colors.input};
    opacity: 0.5;
  }
  box-shadow: ${(props) => props.theme.shadow_inset};
  margin-bottom: 1rem;
`;
export const PinImg = styled.div<LabelType>`
  width: 340px;
  display: ${(props) => (props.status ? 'none' : 'flex')};
  align-items: center;
  flex-direction: column;
  img {
    width: 100%;
    border-radius: var(--border-md);
    object-fit: cover;
    margin-bottom: 0.75rem;
  }
`;
