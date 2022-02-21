import { useState } from 'react';
import styled from 'styled-components';
import { BaseContainer } from 'theme';
import { ConfirmationModal } from './Model';
export default function NotFound() {
  const [show, setShow] = useState(false);
  const hideModal = (arg: any) => {
    setShow(false);
    // actOnModalResult(arg);
  };
  return (
    <NotFoundWrapper>
      <Title>Not Found Pages</Title>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eos consequuntur eaque expedita vel nostrum.
        Consectetur deleniti asperiores animi voluptas, maxime aperiam beatae id neque fugit voluptates culpa esse
        maiores.
      </p>
      <button onClick={() => setShow(!show)}>ok</button>
      <ConfirmationModal
        show={show}
        headerText="Confirm delete item?"
        handleClose={hideModal}
        detailText="loremmmmmmmmm"
      ></ConfirmationModal>
    </NotFoundWrapper>
  );
}
const NotFoundWrapper = styled(BaseContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  padding-left: 50px;
  padding-right: 50px;
`;
const Title = styled.h1``;
