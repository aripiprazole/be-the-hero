import React from "react";

import PropTypes from "prop-types";

import { useNavigation } from "@react-navigation/native";

import { Feather } from "@expo/vector-icons";

import {
  Container,
  Button,
  ButtonText,
  IncidentProperty,
  IncidentValue,
} from "./styles";

const Incident = ({ details = true, incident }) => {
  const navigation = useNavigation();

  function handlePress() {
    navigation.navigate("Detail", {
      incident,
    });
  }

  return (
    <Container>
      <IncidentProperty>ONG:</IncidentProperty>
      <IncidentValue>{incident.name}</IncidentValue>

      <IncidentProperty>CASO:</IncidentProperty>
      <IncidentValue>
        {incident.title} {incident.city}
      </IncidentValue>

      <IncidentProperty>VALOR:</IncidentProperty>
      <IncidentValue>
        {incident.value.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </IncidentValue>

      {details && (
        <Button onPress={handlePress}>
          <ButtonText>Ver mais detalhes</ButtonText>
          <Feather name={"arrow-right"} size={16} color={"#e02041"} />
        </Button>
      )}
    </Container>
  );
};

Incident.propTypes = {
  details: PropTypes.bool,
  incident: PropTypes.object,
};

Incident.defaultProps = {
  details: true,
};

export default Incident;
