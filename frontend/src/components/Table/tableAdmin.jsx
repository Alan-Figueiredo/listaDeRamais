import { Link } from "react-router-dom";
import ButtonCustom from "../ButtonCustom";
import Icons from "../Icons";
import styles from "./Table.module.css";
import { useState } from "react";

function TableAdmin({ data }) {

  const [] = useState;

  return (
    <table className={styles.containerTableAdmin}>
      <thead>
        <tr>
          <th>Ramal</th>
          <th>Nome</th>
          <th>Empresa</th>
          <th>Departamento</th>
          <th><Link to="/pageEditRamal"><ButtonCustom nome="Novo Ramal"/></Link></th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, i) => (
          <tr key={i}>
            <td>{item.ramal}</td>
            <td>{item.nome}</td>
            <td>{item.empresa}</td>
            <td>{item.depart}</td>
            <td>
              <Icons />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableAdmin;
