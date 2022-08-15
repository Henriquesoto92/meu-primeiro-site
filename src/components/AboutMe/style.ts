import styled from "styled-components";

export const Header = styled.div`
  height: auto;
  width: 100%;
  background: #131a26;
  /* background: -webkit-linear-gradient(to left, #1d2738, #131a26);
    background: linear-gradient(to left, #1d2738, #131a26); */
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2rem;

  > div:nth-child(2) {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: start;
    margin-left: 2rem;

    > h1 {
      margin-bottom: 2rem;
      color: ${(props) => props.theme.colors.gold};
    }

    > h2 {
      margin-bottom: 3rem;
      color: white;
      font-weight: 400;
      transition: all 0.3s;
      display: flex;
      justify-content: flex-end;
      align-items: center;

      > span {
        width: 3rem;
        height: 0.2rem;
        border: 0;
        margin-right: 1rem;
        border-radius: 0.1rem;
        background-color: ${(props) => props.theme.colors.gold};
      }
    }
  }
`;

export const Frame = styled.div`
  width: 100%;
  height: 30rem;
  background-color: ${(props) => props.theme.colors.black};
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;

  > div > img {
    width: 100%;
    height: auto;
    padding: 2rem;
    background-image: cover;
    border-radius: 1rem;
  }
`;
