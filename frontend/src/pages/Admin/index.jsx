import HeaderAdmin from "../../components/Header/indexAdmin"
import Login from "../../components/Login"
import ContainerLogin from "../../components/Container/containerLogin";

function Admin() {
    return(
        <ContainerLogin>
            <HeaderAdmin/>
            <Login/>
        </ContainerLogin>
    )
}

export default Admin;