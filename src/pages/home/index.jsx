import { Header, Title, LogoImg, MenuImg, Content, PerfilImg, TitlesEffect, ContentTitles, TitleName, TitleDescpt, ContentSocialLinks, ContentAll } from './styles'
import Logo from '../../assets/logo.svg'
import MenuIcon from '../../assets/menu-icon.svg'
import Photo from '../../assets/foto.svg'
import Button from '../../components/button'
import BtnSocialMedia from '../../components/btnSocialMedia'
import GitHubIcon from '../../assets/github-icon.svg'
import LinkedInIcon from '../../assets/linkedin-icon.svg'
import GmailIcon from '../../assets/gmail-icon.svg'
import DiscordIcon from '../../assets/discord-icon.svg'

const socialLinks = [
    {link: 'https://github.com/MouraGabriel53', icon: GitHubIcon},
    {link: 'https://www.linkedin.com/in/gabrielnmoura/', icon: LinkedInIcon},
    {link: 'mailto:contato.gabrielnmoura@gmail.com', icon: GmailIcon},
    {link: 'https://discord.gg/8pw7saGt', icon: DiscordIcon},
]

export default function Home() {
    return (
        <>
            <Header>
                <LogoImg src={Logo} alt="Logo" />
                <Title>Gabriel Moura</Title>
                <MenuImg src={MenuIcon} alt="Menu Icon" />
            </Header>
            <ContentAll>
                <Content>
                    <PerfilImg src={Photo} alt="Gabriel's photo" />
                    <ContentTitles>
                        <TitlesEffect></TitlesEffect>
                        <TitleName>Gabriel Moura</TitleName>
                        <TitleDescpt>Full stack Developer</TitleDescpt>
                    </ContentTitles>
                </Content>
                <Button></Button>
                <ContentSocialLinks>
                    {
                        socialLinks.map((item) => (
                            <BtnSocialMedia link={item.link} icon={item.icon}></BtnSocialMedia>
                        ))
                    }
                </ContentSocialLinks>
            </ContentAll>
         </>
    )
}