import { styled } from "styled-components"

const BotonIcono = styled.button`
    margin-left: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    cursor: pointer;

    img {
        width: 16px !important;
    }

    .close {
        top: 11%;
        right: 27%;
        position: fixed;
    }
`

export default BotonIcono