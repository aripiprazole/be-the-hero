import React, { useCallback, useEffect, useState } from "react";

import { FiPower, FiTrash2 } from "react-icons/fi";

import { Link, useHistory } from "react-router-dom";

import LogoImg from "../../assets/logo.svg";

import {
  Container,
  Header,
  RegisterNewIncident,
  Button,
  Cases,
  Case,
  TrashIcon,
} from "./styles";
import Api from "../../services/api";

const Profile = () => {
  const [incidents, setIncidents] = useState([]);

  const history = useHistory();

  const ongId = localStorage.getItem("ongId");
  const ongName = localStorage.getItem("ongName");

  if (!ongId || !ongName) {
    history.push("/");
  }

  const loadIncidents = useCallback(async () => {
    try {
      const response = await Api.get("incidents");

      setIncidents(response.data);
    } catch {
      console.error("Couldn't get this data");
    }
  }, []);

  useEffect(() => {
    loadIncidents().then();
  }, [ongId]);

  /**
   * @param {number} id
   */
  async function handleDelete(id) {
    try {
      await Api.delete(`incidents/${id}`);
    } catch {
      console.error("Error");
    }

    const _incidents = incidents.filter((incident) => incident.id !== id);

    setIncidents(_incidents);
  }

  function handleLogout() {
    localStorage.removeItem("ongId");
    localStorage.removeItem("ongName");

    history.push(history.location.pathname);
  }

  return (
    <Container>
      <Header>
        <img src={LogoImg} alt={"Logo "} />
        <span>Bem vinda, ONG</span>

        <Link to={"/incident/new"} component={RegisterNewIncident}>
          Cadastrar novo caso
        </Link>

        <Button onClick={handleLogout}>
          <FiPower size={18} color={"#e02041"} />
        </Button>
      </Header>

      <h1>Casos cadastrados</h1>

      <Cases>
        {incidents.map((incident) => (
          <Case key={incident.id}>
            <strong>CASO:</strong>
            <p>{incident.name}</p>
            <strong>DESCRIÇÃO:</strong>
            <p>{incident.descriptionr}</p>
            <strong>VALOR:</strong>
            <p>
              {incident.value.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
            <TrashIcon onClick={() => handleDelete(incident.id)}>
              <FiTrash2 size={20} color={"#a8a8b3"} />
            </TrashIcon>
          </Case>
        ))}
      </Cases>
    </Container>
  );
};

export default Profile;
