import Header from "./components/Header";
import Cards from "./components/Cards";
import Container from "./components/Cards/container";
function App() {
  return (
    <>
      <Header />
      <Container>
        <Cards nome="Topazio" />
        <Cards nome="Jade" />
        <Cards nome="Cristal" />
        <Cards nome="Peugeot" />
        <Cards nome="Citroen" />
        <Cards nome="Itadil" />
        <Cards nome="Itamadil" />
        <Cards nome="Rubi" />
        <Cards nome="Seminovos" />
      </Container>
    </>
  );
}

export default App;
