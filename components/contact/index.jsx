import Button from "../button"
import Input from "../input"
import Select from "../select"
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
                <Input type="text" placeholder="Nome completo" required/>
                <Input type="email" placeholder="E-mail profissional" required/>
                <Input type="number" placeholder="Celular/Whatsapp" pattern=" /^(?:\+)[0-9]{2}\s?(?:\()[0-9]{2}(?:\))\s?[0-9]{4,5}(?:-)[0-9]{4}$/" required/>
                <Input type="text" placeholder="Site" />
                <Select placeholder="Orçamento para mídia" options={[
                    {label: "Instagram", value:"instagram"},
                    {label: "Facebook", value:"facebook"}
                ]} /> 

                <Button title="Enviar" kind="full" />
                </form>
            </div>
        </div>
    )
}

export default Contact