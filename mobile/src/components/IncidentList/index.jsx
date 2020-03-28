import React from "react";

import PropTypes from "prop-types";

import Incident from "../Incident";

import { Container } from "./styles";

const IncidentList = ({ incidents }) => {
  return (
    <Container
      data={incidents}
      keyExtractor={(incident) => incident.toString()}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => <Incident incident={item} />}
    />
  );
};

IncidentList.propTypes = {
  incidents: PropTypes.array.isRequired,
};

export default React.memo(IncidentList);
