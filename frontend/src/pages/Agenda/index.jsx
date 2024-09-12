import Header from "../../components/Header";
import ContainerAgenda from "../../components/Container/containerAgenda";
import BoxAgenda from "../../components/BoxAgenda";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { findContactCity } from "../../Services/contact/contactService";

function Agenda() {
  const [nameSector, setNameSector] = useState([]);
  const location = useLocation();
  const nameImage = location.state?.objNameCity;
  
  useEffect(() => {
    if (nameImage) {
        const findNameCity = async () => {
        const response = await findContactCity(nameImage);
        console.log(response.data)
        const dataSector = response.data.map((i) => ({
          sectorName: i.idSector.nameSector,
          cityName : i.idCity.nameCity,
        }));
        
        const uniqueSectors = Array.from(
          new Set(dataSector.map((item) => item.sectorName))
        ).map((sectorName) => {
          //console.log("Setor "+sectorName)
          console.log(dataSector)
          return dataSector.find((item) => item.sectorName === sectorName);
        });
        setNameSector(uniqueSectors);
      };

      findNameCity();
    }
  }, [nameImage]);
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
