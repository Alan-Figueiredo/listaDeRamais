import HeaderAdmin from "../../components/Header/indexAdmin";
import ContainerAdmin from "../../components/Container/containerAdmin"

import TableAdmin from "../../components/BoxAgenda/tableAdmin"

function PageAdmin () {

    return(
        <ContainerAdmin>
            <HeaderAdmin/>
            <div >
                <TableAdmin nome="Nome" depart="Departamento" ramal="Ramal"/>
            </div>
        </ContainerAdmin>
        
    )
}

export default PageAdmin;