import { Link } from "react-router-dom";
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
        <Link to="/agenda">
          <NameCity name="Feira de Santana" />
        </Link>
        
      </ContainerList>
    </>
  );
}

export default ListCity;
