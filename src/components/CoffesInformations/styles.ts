import { darken, transparentize } from "polished";
import { fadeIn } from "react-animations";
import styled, { keyframes } from "styled-components";

const fadeAnimation = keyframes`${fadeIn}`;

export const Informations = styled.div`
  animation: 1s ${fadeAnimation};
  span {
    font-size: 2.5rem;
    color: var(--green);
    font-weight: bold;
  }

  p {
    font-size: 1.5rem;
    margin: 1rem 0;
    color: var(--textLight);
  }
  h1 {
    font-size: 4.5rem;
    color: var(--textLight);
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  button {
    padding: 1rem 0.9rem;
    border: 0;
    background-color: transparent;
    font-size: 1rem;
    text-transform: uppercase;
    border-radius: 6px;
    transition: filter 0.2s;
    transition: background 0.2s;
    &:hover {
      filter: brightness(0.9);
    }

    &.orderButton {
      background-color: var(--green);
      color: #fff;
      width: 8rem;
    }
  }

  button + button {
    margin-left: 2rem;
    border: 1px solid var(--green);

    &:hover {
      background-color: var(--green);
      color: #fff;
      border: 1px solid #fff;
    }
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 25rem;

  span {
    cursor: pointer;
  }

  button {
    background-color: transparent;
    border: 0;
  }
`;

export const ButtonsModalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  button {
    padding: 1.5rem;
    background-color: var(--green);
    color: #fff;
    border: 0;
    border-radius: 2rem;
    margin: 2rem 0;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.9);
    }
  }
`;
