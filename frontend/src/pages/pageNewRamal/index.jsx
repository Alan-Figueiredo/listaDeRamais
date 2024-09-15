import HeaderAdmin from "../../components/Header/indexAdmin";
import ContainerAdmin from "../../components/Container/containerAdmin";
import FormNewRamal from "../../components/FormEditRamal";
import BackButton from "../../components/Exit/backbutton";

function PageNewRamal() {
  return (
    <>
      <HeaderAdmin />
      <ContainerAdmin>
        <BackButton/>
        <FormNewRamal />
      </ContainerAdmin>
    </>
  );
}

export default PageNewRamal;
