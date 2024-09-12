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
        const response = await findContactCity(nameImageCity);
        const dataSector = response.data.map((i) => ({
          sectorName: i.idSector.nameSector,
          cityName : i.idCity.nameCity,
        }));
        console.log(dataSector)
        const uniqueSectors = Array.from(
          new Set(dataSector.map((item) => `${item.sectorName}|${item.cityName}`))
          ).map((combinedKey) => {
          const [sectorName, cityName] = combinedKey.split('|');
          return dataSector.find((item) => item.sectorName === sectorName && item.cityName === cityName);
        });
        setNameSector(uniqueSectors);
      };

      findNameCity();
    }
  }, [nameImageCity]);
  console.log(nameSector)
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
