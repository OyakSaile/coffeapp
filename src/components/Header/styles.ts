import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 2rem 0;
  background-color: #FCFCFC;
  `;

export const ContentHeader = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  ul {
    display: flex;
    justify-content: space-between;
    font-size: 1.2rem;
    li {
      list-style: none;

      a {
        text-decoration: none;
        color: var(--textLight);
        transition: color .2s;
        font-weight: bold;

        &:hover{
          color: var(--green);
        }
      }
    }
  }
`;
