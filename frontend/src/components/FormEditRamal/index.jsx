import styles from "./FormEditRamal.module.css"
import ButtonCustom from "../ButtonCustom"
import Banner from "../Banner"

function FormEditRamal() {
    
    return(
        <div>
        <Banner nome="Editar ramal"/>
        <h4>Ramal</h4>
        <input type="text"></input>
        <h4>Nome</h4>
        <input type="text"></input>
        <h4>Departamento</h4>
        <input type="text"></input>
        <h4>Empresa</h4>
        <input type="text"></input>
        <ButtonCustom nome="Salvar"/>
        </div>
    )
}

export default FormEditRamal;