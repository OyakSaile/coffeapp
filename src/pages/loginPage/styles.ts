import { fadeIn } from "react-animations";
import styled, { keyframes } from "styled-components";

const animationFade = keyframes`${fadeIn}`;
export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  animation: 1s ${animationFade};
  justify-content: center;
  align-items: center;

  div {
    flex: 2;

    img {
      height: 100%;
      object-fit: fill;
    }
  }

  div + div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const FormContainer = styled.form`
  padding: 2rem;
  height: 100%;
  a {
    display: flex;
    align-items: center;
    &.arrowBack {
      font-size: 2rem;
      color: var(--green);
    }
  }
  p {
    font-size: 1.5rem;
    color: var(--textLight);
    margin: 0.5rem;
  }
  h1 {
    color: var(--textLight);
    font-size: 5rem;
    span {
      color: var(--green);
    }
  }
`;

export const FormData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input {
    font-size: 1.2rem;
    width: 24rem;
    height: 2.5rem;
    border-radius: 6px;
    width: 100%;

    border: 1px solid var(--textLight);
    padding: 0.8rem;

    &::placeholder {
      color: #c7c7c7;
    }
    &:focus {
      border: 1px solid var(--green);
    }

    &:first-child {
      margin-top: 1rem;
    }
  }

  button {
    width: 100%;
    background-color: var(--green);
    color: #fff;
    font-size: 1.5rem;
    padding: 1rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    transition: filter 0.2s;
    border-radius: 6px;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const SocialLogin = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 2rem;

  button {
    background-color: transparent;
    border: 0.5px solid #c7c7c7;
    padding: 1.5rem;
    border-radius: 6px;
  }
`;
