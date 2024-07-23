import HeaderAdmin from "../../components/Header/indexAdmin";
import ContainerAdmin from "../../components/Container/containerAdmin";
import TableAdmin from "../../components/Table/tableAdmin";

function PageAdmin() {
  const data = [
    { ramal: "(75) 2101-8590", nome: "Alan", depart: "Financeiro" ,empresa : "Topazio"},
    { ramal: "(75) 2101-8540", nome: "Domenic", depart: "88,110",empresa : "Topazio" },
    { ramal: "(75) 2101-8540", nome: "Domenic", depart: "88,110",empresa : "Topazio" },
    { ramal: "(75) 2101-8540", nome: "Domenic", depart: "88,110",empresa : "Topazio" },
    { ramal: "(75) 2101-8540", nome: "Domenic", depart: "88,110",empresa : "Topazio" },
    
   
  ];

  return (
    <ContainerAdmin>
      <HeaderAdmin />
      <TableAdmin data={data} />
    </ContainerAdmin>
  );
}

export default PageAdmin;