import { useEffect, useState } from "react";
import Cards from "../../components/Cards/index";
import Container from "../../components/Container";
import Header from "../../components/Header";
import { findAll } from "../../Services/company/companyService";

function Home() {
  const [nome, setNome] = useState([]);

  const findAllCompany = async () => {
    try {
      const response = await findAll();
      const companyNamesSet = new Set(response.data.map((i) => i.nameCompany));
      const uniqueCompanyNames = Array.from(companyNamesSet);
      setNome(uniqueCompanyNames);
    } catch (error) {
      console.error("Erro ao buscar empresas:", error);
    }
  };

  useEffect(() => {
    findAllCompany();
  }, []);

  return (
    <Container>
      <Header />
      {nome.map((i) => (
        <Cards key={i} nome={i} />
      ))}
    </Container>
  );
}

export default Home;
