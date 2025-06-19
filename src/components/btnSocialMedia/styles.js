import styled from 'styled-components';

export const Link = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 40px;
    height: 40px;

    border-radius: 50%; 
    padding: 10px;

    &:hover{
        transition: 300ms;  
        background: var(--highlight-color, rgba(255, 255, 255, 0.2));
    }

    transition: 300ms;
`
export const Icon = styled.img`
    width: 40px;
    height: 40px;
`