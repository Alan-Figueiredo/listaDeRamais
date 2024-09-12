import { useNavigate, useLocation } from "react-router-dom";
import ContainerList from "../../components/Container/containerList";
import Header from "../../components/Header";
import NameCity from "../../components/NameCity";
import { useEffect, useState } from "react";
import { findNameCompany } from "../../Services/company/companyService";

function ListCity() {
  const [nameData, setNameData] = useState([]);
  const location = useLocation();
  const imageImageHome = location.state?.objNameCity;
  const navigate = useNavigate();
  
  useEffect(() => {
    if (imageImageHome) {
      const getNameCompany = async () => {
        try {
          const response = await findNameCompany(imageImageHome);
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
  }, [imageImageHome]);

  const nameImg = (cityName) => {
    navigate(`/agenda`, { state: { objNameCity: cityName, objImageHome: imageImageHome } });
  };

  return (
    <>
      <Header />
      <ContainerList>
        <h2 style={{ padding: 80, color: "#004866" }}>
          Por favor, selecione uma filial:
        </h2>
        {nameData.map((item, i) => (
          <NameCity key={i} name={item.cityName} event={() => nameImg(item.cityName)} />
        ))}
      </ContainerList>
    </>
  );
}

export default ListCity;
