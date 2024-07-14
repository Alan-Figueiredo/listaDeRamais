import Cards from "../../components/Cards/index";
import Container from "../../components/Container";
import Header from "../../components/Header";


function Home() {
  return (
    <Container>
      <Header/>
      <Cards nome="Topazio" />
      <Cards nome="Jade" />
      <Cards nome="Cristal" />
      <Cards nome="Peugeot" />
      <Cards nome="Citroen" />
      <Cards nome="Itadil" />
      <Cards nome="Itamadil" />
      <Cards nome="Rubi" />
      <Cards nome="Seminovos" />
      <Cards nome="Consorcio" />
    </Container>
  );
}

export default Home;
