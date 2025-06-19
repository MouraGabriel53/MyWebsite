import styled from 'styled-components'

export const ButtonComp = styled.button`
    width: 300px;
    height: 50px;

    border: 2px solid var(--Complementar-2, #9F5EFF);
    border-radius: 30px;
    background: var(--Complementar-2, #9F5EFF);

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