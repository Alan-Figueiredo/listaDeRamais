import HeaderAdmin from "../../components/Header/indexAdmin";
import ContainerAdmin from "../../components/Container/containerAdmin";
import FormEditRamal from "../../components/FormEditRamal";
import BackButton from "../../components/Exit/backbutton";

function PageEditRamal() {
  return (
    <>
      <HeaderAdmin />
      <ContainerAdmin>
        <BackButton/>
        <FormEditRamal />
      </ContainerAdmin>
    </>
  );
}

export default PageEditRamal;
