import ContainerList from "../../components/Container/containerList";
import Header from "../../components/Header";
import NameCity from "../../components/NameCity";

function ListCity() {
  return (
    <>
      <Header />
      <ContainerList>
        <h2 style={{ padding: 80, color: "#004866" }}>
          Por favor, selecione uma filial:
        </h2>
        <NameCity name="Feira de Santana" />
        <NameCity name="Feira de Santana" />
        <NameCity name="Feira de Santana" />
        <NameCity name="Feira de Santana" />
        <NameCity name="Feira de Santana" />
        <NameCity name="Feira de Santana" />
        <NameCity name="Feira de Santana" />
      </ContainerList>
    </>
  );
}

export default ListCity;
