import Image from "next/image"
import Styles from "./footer.module.scss"
import Logo from "/public/images/agencia.svg"
import Link from "next/link"
import IconInstagram from "./icons/instagram.svg"
import IconFacebook from "./icons/face-white.svg"
import IconLinkedin from "./icons/linkedin.svg"
import IconYoutube from "./icons/youtube.svg"

const Footer = () => {
    return (
        <div className={Styles.container}>
            <div className={`${Styles.column} ${Styles.columnPrincipal}`}>
                <Image src={Logo} alt="logo" href="#" />
                <h1 className={Styles.title}>0800 080 080</h1>
                <p>agencia@agencia.com.br</p>
            </div>
            <div className={Styles.column}>
                <h1>MENU</h1>
                <p>Quem somos</p>
                <p>Cases</p>
            </div>
            <div className={Styles.column}>
                <h1>CONTEÚDO</h1>
                <p>E-books</p>
                <p>Fórmulas prontas</p>
            </div>
            <div className={`${Styles.column} ${Styles.alignRight}`}>
                <h1>SOCIAL</h1>
                <div className={Styles.icons}>
                <Link href="#">
                <Image src={IconInstagram} alt="Instagram" className={Styles.icon} />
                </Link>
                <Link href="#">
                <Image src={IconFacebook} alt="Facebook" className={Styles.icon} />
                </Link>
                <Link href="#">
                <Image src={IconLinkedin} alt="Linkedin" className={Styles.icon} />
                </Link>
                <Link href="#">
                <Image src={IconYoutube} alt="Youtube" className={Styles.icon} />
                </Link>
            </div>
            </div>
            <div className={Styles.allRightReserved}>
               ©2022 AGENCIA - Todos os direitos reservados.
            </div>
        </div>
    )
}

export default Footer