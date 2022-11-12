import styled, { keyframes } from 'styled-components';

const glower = keyframes`
    0% {
        background-position: 0 0;
    }
    25% {
        background-position: 200% 0;
    }
    50% {
        background-position: 400% 0;
    }
    75% {
        background-position: 200% 0;
    }
    100% {
        background-position: 0 0;
    }
`;

const Div = styled.div`
    color: rgb(245, 193, 80);
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    gap: 0.5rem;
    transition: 0.6s;
    height: 350px;
    width: 220px;
    margin-bottom: 20px;
    margin-right: 20px;
    margin-left: 20px;
    background: linear-gradient(to bottom, #321c4b 0%, #170e27 100%);
    :hover {
        transition: 0.3s;
        box-shadow: 0 0 90px 5px rgba(187, 14, 255, 0.623);
    }

    :before {
        content: "";
        position: absolute;
        left: -2px;
        top: -2px;
        background: linear-gradient(
          45deg,
          #f74df7,
          #ff004cd9,
          #3b89ff,
          #3713ff,
          #ad27ad,
          #bd2681,
          #6512b9,
          #ff3300de,
          #904bff
        );
        background-size: 400%;
        border-radius: 10px;
        width: calc(100% + 5px);
        height: calc(100% + 5px);
        z-index: -1;
        animation: ${glower} 20s linear infinite;
    }
`;

const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
`;

const H4 = styled.h4`
    color: #cc95ff;
`;

const ImgContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 220px;
    padding: 0.3em;
    border-radius: 10px;
    margin-bottom: 0.2rem;
`;

export { 
    Div,
    Img,
    H4,
    ImgContainer
};

