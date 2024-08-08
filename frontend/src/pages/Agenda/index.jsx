import Header from "../../components/Header";
import ContainerAgenda from "../../components/Container/containerAgenda";
import BoxAgenda from "../../components/BoxAgenda";
import { useLocation } from "react-router-dom";

function Agenda() {
  const location = useLocation();
  const nameImage = location.state?.objNameCity;

  console.log(nameImage)
  
  return (
    <>
      <Header />
      <ContainerAgenda>
        <BoxAgenda setor="vendas" />
        <BoxAgenda setor="pos vendas" />
        <BoxAgenda setor="peças" />
      </ContainerAgenda>
    </>
  );
}

export default Agenda;
