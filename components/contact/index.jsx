import Button from "../button"
import Styles from "./contact.module.scss"

const Contact = () => {
    return (
        <div className={Styles.container}>
            <div className={Styles.texts}>
                <span>ENTRE EM CONTATO</span>
                <h1>Aumente seu resultado de vendas e performance</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
            </div>
            <div className={Styles.form}>
                <h1>Fale com um especialista</h1>
                <form>
                <input type="text" placeholder="Nome completo" required/>
                <input type="email" placeholder="E-mail profissional" required/>
                <input type="number" placeholder="Celular/Whatsapp" pattern=" /^(?:\+)[0-9]{2}\s?(?:\()[0-9]{2}(?:\))\s?[0-9]{4,5}(?:-)[0-9]{4}$/" required/>
                <input type="text" placeholder="Site" />
                <select type="text" placeholder="Orçamento para mídia"> 
                    <option>R$500 - R$2500</option>
                    <option>R$2500 - R$10.000</option>
                    <option>R$10.000 - R$50.000</option>
                </select>

                <Button title="Enviar" />
                </form>
            </div>
        </div>
    )
}

export default Contact