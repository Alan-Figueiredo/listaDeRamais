import HeaderAdmin from "../../components/Header/indexAdmin";
import ContainerAdmin from "../../components/Container/containerAdmin";
import TableAdmin from "../../components/Table/tableAdmin";
import Banner from "../../components/Banner";
import Exit from "../../components/Exit";

function PageAdmin() {
  return (
    <>
      <HeaderAdmin />
      <ContainerAdmin>
        <Exit />
        <Banner nome="Cadastro de Ramais" />
        <TableAdmin/>
      </ContainerAdmin>
    </>
  );
}

export default PageAdmin;
