import styled from "styled-components";
 export const Button = styled.button `
    color: white;
    padding: 10px 18px;
    background: black;
    border-radius: 5px;
    min-width: 220px;
    border: none;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    transition: 0.3s background ease-in;
    &:hover{
        background-color: #16080817;
        color: black;
        transition: 0.3s background ease-in;
    }
`;