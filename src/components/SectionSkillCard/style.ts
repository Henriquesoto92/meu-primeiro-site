import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 1rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  background-color: #1d2738;
  box-shadow: 1px 50px 331px rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;

  > h3 {
    color: ${(props) => props.theme.colors.gold};
    margin-bottom: 1.5rem;
  }

  > div {
    width: 100%;
    display: Flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;

    > div {
      display: Flex;
      flex-direction: row;

      > p {
        color: white;
        white-space: nowrap;
      }

      svg {
        color: ${(props) => props.theme.colors.gold};
        font-size: 2rem;
        width: 2rem;
        margin-right: 1rem;
        path {
          font-size: 2rem;
        }
      }
    }
  }
`;
