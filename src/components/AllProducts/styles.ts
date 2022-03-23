import styled from "styled-components";

export const ContainerAllProducts = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Products = styled.div`
  h2 {
    font-size: 2rem;
    color: var(--textLight);
    margin: 2rem 0;
  }

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    text-align: center;
  }

  li {
    list-style: none;

    div {
      height: 9rem;
    }
    img {
      max-width: 100%;
      max-height: 100%;
    }

    h1 {
      color: var(--textLight);
      margin: 0.9rem 0;
      font-size: 2rem;
      text-align: center;
    }

    h2 {
      margin: 1rem 0;
      font-size: 2rem;
      color: var(--green);
    }

    button {
      padding: 1rem 0.9rem;
      border: 0;
      background-color: var(--green);
      font-size: 1rem;
      text-transform: uppercase;
      border-radius: 6px;
      transition: filter 0.2s;
      transition: background 0.2s;
      &:hover {
        filter: brightness(0.9);
      }

      background-color: var(--green);
      color: #fff;
      width: 8rem;
    }
  }
`;
