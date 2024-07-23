import HeaderAdmin from "../../components/Header/indexAdmin";
import ContainerAdmin from "../../components/Container/containerAdmin";
import TableAdmin from "../../components/Table/tableAdmin";

function PageAdmin() {
  const data = [
    { ramal: "(75) 2101-85900000000000000", nome: "Alan", depart: "Ti" },
    { ramal: "(75) 2101-8540", nome: "Domenic", depart: "88,110" },
    { ramal: "(75) 2101-8548", nome: "Domenic", depart: "88,110" },
    { ramal: "(75) 2101-8549", nome: "Domenic", depart: "88,110" },
  ];

  return (
    <ContainerAdmin>
      <HeaderAdmin />
      <TableAdmin data={data} />
    </ContainerAdmin>
  );
}

export default PageAdmin;
