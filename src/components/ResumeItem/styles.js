import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    border-radius: 10px;
    padding: 10px 9%;
    witdh: 30%;

    @media (max-width: 750px){
        width: 20%;

        p {
            font-size: 12px;
        }
        span {
            font-size: 20px;
        }
        
        svg{
            display: none;
        }
    }
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    gap: 20PX;
    margin: 10px auto;

    svg {
        width: 25px;
        height: 25px;
    }
`;

export const HeaderTitle = styled.p`
    font-size: 20px;
`;

export const Total = styled.span`
    font-size: 20px;
    font-weight: 800;
`;