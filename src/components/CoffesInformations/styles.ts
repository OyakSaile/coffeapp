import styled from "styled-components";
import { darken, transparentize } from "polished";

export const Informations = styled.div`
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

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    border-radius: 0.25rem;
    height: 4rem;
    background-color: #e7e9ee;
    border: 1px solid #d7d7d7;
    font-weight: 400;
    font-size: 1rem;
    &::placeholder {
      color: var(--text-body);
    }
    & + input {
      margin-top: 1rem;
    }
  }

  h2 {
    font-weight: 400;
    span {
      color: var(--green);
      font-weight: bold;
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background-color: var(--green);
    border-radius: 0.25rem;
    font-size: 1rem;
    border: 0;
    color: #fff;
    margin-top: 1.5rem;
    font-weight: 600;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
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
