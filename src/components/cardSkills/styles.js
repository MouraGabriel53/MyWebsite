import styled from 'styled-components'

export const Card = styled.div`
    display: block;

    width: 250px;
    height: 320px;

    border-radius: 20px;
    background: var(--complement-one);
    transform: rotateY(30deg);

    position: relative;

    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    
    &:hover {
        transition: 300ms;
        transform: rotateY(0deg) scale(1.05) translateX(50%);
        z-index: 10;
        box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);
    }

    transition: 300ms;

    &:nth-child(1) {
        z-index: 1;
    }

    &:nth-child(2) {
        margin-left: -50%;
        z-index: 2;
    }

    &:nth-child(3) {
        margin-left: -50%;
        z-index: 3;
    }

    &:nth-child(4) {
        margin-left: -50%;
        z-index: 4;
    }

    &:nth-child(5) {
        margin-left: -50%;
        z-index: 5;
    }
`