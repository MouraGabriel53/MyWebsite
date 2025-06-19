
import { Link, Icon } from './styles'
export default function BtnSocialMedia(props) {
    return(
        <>
            <Link href={props.link} target='_blank'>
                <Icon src={props.icon}></Icon>
            </Link>
        </>
    )
}