import Image from "next/image"
import Link from "next/link"
import Logo from "/public/images/agencia.svg"
import Styles from "./header.module.scss"

const Header = () => {
    return <div className={Styles.container}>
    <div className={Styles.logotipo}>
        <Image src={Logo} />
    </div>
    <div className={Styles.menu}>
                <Link href="#">Home</Link>
                <Link href="#">O que fazemos</Link>
                <Link href="#">Cases</Link>

    </div>
    <div className={Styles.action}></div>
    <button className={Styles.button}>Fale conosco</button>
    </div>
}

export default Header