import HeaderAdmin from "../../components/Header/indexAdmin";
import ContainerAdmin from "../../components/Container/containerAdmin";
import FormEdit from "../../components/FormEditRamal/formEdit";
import BackButton from "../../components/Exit/backbutton";

function PageEditRamal() {
  return (
    <>
      <HeaderAdmin />
      <ContainerAdmin>
        <BackButton/>
        <FormEdit />
      </ContainerAdmin>
    </>
  );
}

export default PageEditRamal;
