import React, { useEffect, useState } from "react";

import { Container, HeaderText, Strong, Title, Description } from "./styles";

import IncidentList from "../../components/IncidentList";
import Header from "../../components/Header";
import Api from "../../services/api";

const Incidents = () => {
  const [incidents, setIncidents] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    async function loadIncidents() {
      try {
        const response = await Api.get("incidents");
        setIncidents(response.data);
        setTotal(response.headers["x-total-count"]);
      } catch {
        console.error("Could'nt get incidents");
      }
    }

    loadIncidents().then();
  }, []);
  return (
    <Container>
      <Header>
        <HeaderText>
          Total de <Strong>{total} casos</Strong>.
        </HeaderText>
      </Header>

      <Title>Seja bem-vindo!</Title>
      <Description>Escolha um dos casos abaixo e salve o dia!</Description>

      <IncidentList incidents={incidents} />
    </Container>
  );
};

export default Incidents;
