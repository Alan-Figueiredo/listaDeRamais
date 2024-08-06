import Header from "../../components/Header";
import ContainerAgenda from "../../components/Container/containerAgenda";
import BoxAgenda from "../../components/BoxAgenda";

function Agenda() {
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
