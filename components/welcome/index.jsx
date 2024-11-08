import Image from "next/image"
import Button from "../button"
import Styles from "./welcome.module.scss"
import BannerWelcome from "/public/images/image-1.svg"

const Welcome = () => {
    return <div className={Styles.container}>
        <div className={Styles.text}>
            <h1>Melhor agência de marketing do Brasil</h1>
            <p>Somos uma agência de performance digital, aceleramos vendas e aquisição de leads para grandes marcas.</p>
            <div className={Styles.buttonWelcome}>
            <Button title="Aumentar vendas" kind="secundary" />
            </div>
        </div>
        <div className={Styles.image}>
            <Image src={BannerWelcome} alt="banner-welcome"/>
        </div>
    </div>
}

export default Welcome