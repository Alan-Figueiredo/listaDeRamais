import { Link, useLocation } from "react-router-dom";
import ContainerList from "../../components/Container/containerList";
import Header from "../../components/Header";
import NameCity from "../../components/NameCity";
import { useEffect, useState } from "react";
import { findNameCompany } from "../../Services/company/companyService";

function ListCity() {
  const [nameData, setNameData] = useState([]);
  const location = useLocation();
  const nameImage = location.state?.objNameCity;

  useEffect(() => {
    if (nameImage) {
      const getNameCompany = async () => {
        try {
          const response = await findNameCompany(nameImage);
          const dataNameCity = response.data.map((i) => ({
            cityName: i.id_city.nameCity,
          }));
          setNameData(dataNameCity);
        } catch (e) {
          throw e;
        }
      };
      getNameCompany();
    }
  }, [nameImage]);
  return (
    <>
      <Header />
      <ContainerList>
        <h2 style={{ padding: 80, color: "#004866" }}>
          Por favor, selecione uma filial:
        </h2>
        {nameData.map((item,i) => (
          <Link key={i} to="/agenda">
            <NameCity name={item.cityName.replace(/_/g, " ")} />
          </Link>
        ))}
      </ContainerList>
    </>
  );
}

export default ListCity;
