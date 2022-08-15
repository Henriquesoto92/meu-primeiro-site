import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 5vw 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #131a26;

  > h1 {
    color: ${(props) => props.theme.colors.gold};
  }

  > span {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: row;
  }

  > div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: start;
    height: 100%;
  }
`;

export const SocialMedia = styled.div`
  max-width: 20rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-right: 200px;

  > p {
    font-size: 1.5rem;
    color: ${(props) => props.theme.colors.white};
  }

  > h2 {
    font-size: 2rem;
    color: ${(props) => props.theme.colors.gold};
  }
`;

export const SocialMediaImgs = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  svg {
    font-size: 2rem;
    color: ${(props) => props.theme.colors.white};
    transition: 0.3s ease;
  }

  svg:hover {
    transform: scale(1.3);
    color: ${(props) => props.theme.colors.gold};
  }
`;
