import styled from "styled-components";

export const Menu = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #ffffff;
  box-shadow: 4px 0px 40px rgba(0, 0, 0, 0.25);
  width: 20rem;
  display: flex;
  padding: 1rem;
  flex-direction: column;

  ul li {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.5rem;
    margin: 1rem 0;
    transition: all 1s;

    &:hover {
      background-color: var(--green);
      padding: 0.5rem 2rem;
      border-radius: 2rem;
      

      a {
        color: #fff;
      }
    }
  }
`;

export const EndNavButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  font-weight: bold;
`;
