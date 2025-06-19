import styled from 'styled-components'

export const ButtonComp = styled.button`
    width: 300px;
    height: 50px;

    border: 2px solid var(--complement-two);
    border-radius: 30px;
    background: var(--complement-two);

    color: #FFF;
    text-align: center;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    &:hover{
        transition: 300ms;
        background: transparent;
    }

    transition: 300ms;
`