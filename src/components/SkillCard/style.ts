import styled from "styled-components";

export const Container = styled.div`
    width: auto;
    height: auto;
    display: Flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    row-gap: 0.5vh;

    > p {
        color: white;
        font-size: 20px;
        transition: all 0.3s;
    }

    > span {
        width: 150px;
        justify-content: space-between;
    }
`;
