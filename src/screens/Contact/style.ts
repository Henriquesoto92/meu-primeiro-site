import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 5vw 10vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;

  background: #131a26;

  > span {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: row;
  }
  > div {
  }
`;

export const SocialMedia = styled.div`
  max-width: 15rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const SocialMediaImgs = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

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
