import styled from 'styled-components';

export const Header = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`
export const ContentAll = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 50px;
    gap: 100px;
`

export const Title = styled.p`
    color: var(--Complementar-2, #9F5EFF);
    text-align: center;
    font-family: "Titillium Web";
    font-size: 20px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
`
export const LogoImg = styled.img`
    width: 30px;
    height: 30px;
`
export const MenuImg = styled.img`
    width: 18px;
    height: 11px;

    &:hover{
        transition: 300ms;
        transform: rotate(90deg);
    }

    transition: 300ms;
`

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    gap: 50px; //ALTERAR
    /* padding: 50px; //ALTERAR */
`

export const PerfilImg = styled.img`
    width: 112.54px;
    height: 127.628px;
`

export const PerfilEffect = styled.img`
    width: 288.863px;
    height: 219.24px;
    transform: rotate(32.064deg);
`

export const ContentTitles = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;

    position: relative;
`

export const TitlesEffect = styled.div`
    width: 288.863px;
    height: 219.24px;
    transform: rotate(32.064deg);

    background: var(--Sombra-Rozul, linear-gradient(180deg, #9F5EFF 0%, #0FF0FC 100%));
    opacity: 0.35;
    filter: blur(50px);

    position: absolute;
`

export const TitleName = styled.h1`
    margin: 0px;

    color: var(--Primria, #0FF0FC);
    text-align: center;
    font-family: "Titillium Web";
    font-size: 40px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
`

export const TitleDescpt = styled.h2`
    margin: 0px;
 
    color: var(--Complementar-1, #F1F1F1);
    text-align: center;
    font-family: "Titillium Web";
    font-size: 24px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
`

export const ContentSocialLinks = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`
