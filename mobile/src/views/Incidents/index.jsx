import React, { useEffect, useState, useCallback } from "react";

import {
  Container,
  HeaderText,
  Strong,
  Title,
  Description,
  IncidentList,
} from "./styles";

import Header from "../../components/Header";
import Api from "../../services/api";
import Incident from "../../components/Incident";

const Incidents = () => {
  const [incidents, setIncidents] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const loadIncidents = useCallback(async () => {
    if (loading) {
      return;
    }

    if (total > 0 && incidents.length >= total) {
      return;
    }

    try {
      const response = await Api.get("incidents", {
        params: {
          page,
        },
      });

      setLoading(true);

      setIncidents(($) => [...response.data, ...$]);
      setTotal(response.headers["x-total-count"]);
      setPage(($) => $++);

      setLoading(false);
    } catch {
      console.error("Could'nt get incidents");
    }
  }, []);

  useEffect(() => {
    loadIncidents().then();
  }, [loadIncidents]);

  return (
    <Container>
      <Header>
        <HeaderText>
          Total de <Strong>{total} casos</Strong>.
        </HeaderText>
      </Header>

      <Title>Seja bem-vindo!</Title>
      <Description>Escolha um dos casos abaixo e salve o dia!</Description>

      <IncidentList
        data={incidents}
        keyExtractor={() => Math.random().toString()}
        showsVerticalScrollIndicator={false}
        onEndReached={loadIncidents}
        onEndReachedThreshold={0.3}
        renderItem={({ item }) => <Incident incident={item} />}
      />
    </Container>
  );
};

export default Incidents;
