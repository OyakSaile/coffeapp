import styled from "styled-components";

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
