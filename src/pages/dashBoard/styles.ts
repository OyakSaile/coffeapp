import styled from "styled-components";

export const Container = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
`;

export const ContentDashBoardArea = styled.div`
  flex: 1;
  margin: 2rem auto;

  gap: 3rem;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  overflow-y: scroll;
  scroll-behavior: smooth;

  margin: 2rem;
  h2 {
    color: var(--textLight);
    font-size: 2.5rem;
  }
`;

export const CardDashBoard = styled.div`
  img {
    width: 5rem;
    margin: 1.5rem 0;
  }
  background-color: #fff;
  width: 25rem;
  height: 25rem;
  padding: 2rem;
  border-radius: 2rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  position: relative;
`;

export const Icons = styled.div`
  margin: 1.5rem 0;
`;
export const IconWithText = styled.div`
  display: flex;
  text-align: left;
  gap: 0.8rem;

  color: var(--textLight);

  svg {
    color: #4285f4;
  }
`;
export const CheckButtons = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
  font-size: 2rem;
  gap: 1.5rem;

  button {
    background-color: transparent;
    border: 0;
    font-size: 2rem;

    svg {
      transition: filter 0.2s;
      &.orderDone {
        color: #77f899;
      }
      &.recuseOrder {
        color: #fc7b7b;
      }

      &:hover {
        filter: brightness(0.8);
      }
    }
  }
`;
