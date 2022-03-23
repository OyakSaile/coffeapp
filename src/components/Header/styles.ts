import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 2rem 0;
  background-color: #fcfcfc;
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
`;

export const ContentHeader = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.2rem;
    li {
      list-style: none;

      a {
        text-decoration: none;
        color: var(--textLight);
        transition: color 0.2s;
        font-weight: bold;

        &:hover {
          color: var(--green);
        }
      }

      &.login {
        background-color: var(--green);
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 2rem;
        padding: 1rem 0;
        width: 7rem;
        transition: filter 0.2s;
        &:hover {
          filter: brightness(0.9);
        }

        a {
          color: #fff;
        }
      }
    }
  }
`;
