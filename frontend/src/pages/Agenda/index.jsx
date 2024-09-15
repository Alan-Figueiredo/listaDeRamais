import Header from "../../components/Header";
import ContainerAgenda from "../../components/Container/containerAgenda";
import BoxAgenda from "../../components/BoxAgenda";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { findContactCity } from "../../Services/contact/contactService";

function Agenda() {
  const [nameSector, setNameSector] = useState([]);
  const location = useLocation();
  const nameImageCity = location.state?.objNameCity; // Seleção de cidades
  const nameImageHome = location.state?.objImageHome; // Seleção de logo na Home

  useEffect(() => {
    
    if (nameImageCity) {
      const findNameCity = async () => {
        try {
          const response = await findContactCity(nameImageCity);
          const dataSector = response.data.map((i) => ({
            sectorName: i.idSector.nameSector,
            cityName: i.idCity.nameCity,
            companyName: i.idCompany.nameCompany,
          }));

          const filteredSectors = dataSector.filter(
            (item) =>
              item.companyName.toLowerCase() === nameImageHome.toLowerCase() &&
              item.cityName.toLowerCase() === nameImageCity.toLowerCase()
          );
          const uniqueSectors = Array.from(
            new Set(filteredSectors.map((item) => item.sectorName))
          ).map((sectorName) => {
            return filteredSectors.find(
              (item) => item.sectorName === sectorName
            );
          });
          setNameSector(uniqueSectors);
        } catch (error) {
          console.error("Erro ao buscar contatos da cidade:", error);
        }
      };

      findNameCity();

    }
  }, [nameImageCity]);
  return (
    <>
      <Header />
      <ContainerAgenda>
        {nameSector.map((item, i) => (
          <BoxAgenda
          key={i}
          name={item.sectorName.toUpperCase()}
          NameSelectedcity={nameImageCity}    // Passa city como prop
          NameImagehome={nameImageHome}    // Passa home como prop
        />
        ))}
      </ContainerAgenda>
    </>
  );
}

export default Agenda;
