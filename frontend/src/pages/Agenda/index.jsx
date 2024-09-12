import Header from "../../components/Header";
import ContainerAgenda from "../../components/Container/containerAgenda";
import BoxAgenda from "../../components/BoxAgenda";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { findContactCity } from "../../Services/contact/contactService";

function Agenda() {
  const [nameSector, setNameSector] = useState([]);
  const location = useLocation();
  const nameImageCity = location.state?.objNameCity;
  const nameImageHome = location.state?.objImageHome;

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
          console.log('Dados da API:', response.data);
          
          // Filtra os setores onde cityName é igual a nameImageHome
          const filteredSectors = dataSector.filter(item => item.cityName === nameImageHome);
          console.log(dataSector.filter(item => item.cityName === nameImageHome))
          // Remove setores duplicados
          const uniqueSectors = Array.from(
            new Set(filteredSectors.map(item => item.sectorName))
          ).map(sectorName => {
            return filteredSectors.find(item => item.sectorName === sectorName);
          });

          setNameSector(uniqueSectors);
        } catch (error) {
          console.error('Erro ao buscar contatos da cidade:', error);
        }
      };

      findNameCity();
    }
  }, [nameImageCity, nameImageHome]);

  console.log("Nome da loja:", nameImageHome);
  console.log("Setores:", nameSector);

  return (
    <>
      <Header />
      <ContainerAgenda>
        {nameSector.map((item, i) => (
          <BoxAgenda key={i} name={item.sectorName.toUpperCase()} />
        ))}
      </ContainerAgenda>
    </>
  );
}

export default Agenda;
