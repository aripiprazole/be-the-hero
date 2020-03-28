import React from "react";

import { Linking } from "react-native";

import { useNavigation, useRoute } from "@react-navigation/native";

import * as MailCompose from "expo-mail-composer";

import { Feather } from "@expo/vector-icons";

import {
  Action,
  Actions,
  ActionText,
  Back,
  Contact,
  Container,
  Description,
  Title,
  IncidentWrap,
} from "./styles";

import Header from "../../components/Header";
import {
  Container as Incident,
  IncidentLastProp,
  IncidentProperty,
  IncidentValue,
} from "../../components/Incident/styles";

const Detail = () => {
  const navigation = useNavigation();
  const {
    params: { incident },
  } = useRoute();

  const value = incident.value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const message = `Olá APAD, estou entrando em contato no cato pois gostaria de ajudar no caso '${incident.title}' com ${value}`;

  function handleReturnToIncidents() {
    navigation.goBack();
  }

  async function handleSendMail() {
    await MailCompose.composeAsync({
      subject: "Herói do caso: ${incident.title}",
      recipients: [incident.email],
      body: message,
      isHtml: false,
      attachments: [],
      bccRecipients: [],
      ccRecipients: [],
    });
  }

  async function handleWhatsapp() {
    await Linking.openURL(
      `whatsapp://send?=phone=${incident.whatsapp}&text=` + message
    );
  }

  return (
    <Container>
      <Header>
        <Back onPress={handleReturnToIncidents}>
          <Feather name={"arrow-left"} size={28} color={"#e02041"} />
        </Back>
      </Header>
      <IncidentWrap>
        <Incident>
          <IncidentProperty>ONG:</IncidentProperty>
          <IncidentValue>{incident.name}</IncidentValue>

          <IncidentProperty>CASO:</IncidentProperty>
          <IncidentValue>{incident.title}</IncidentValue>

          <IncidentProperty>VALOR:</IncidentProperty>
          <IncidentLastProp>{value}</IncidentLastProp>
        </Incident>
      </IncidentWrap>
      <Contact>
        <Title>Salve o dia!</Title>
        <Title>Seja o herói desse caso.</Title>

        <Description>Entre em contato:</Description>

        <Actions>
          <Action onPress={handleWhatsapp}>
            <ActionText>Whatsapp</ActionText>
          </Action>
          <Action onPress={handleSendMail}>
            <ActionText>Email</ActionText>
          </Action>
        </Actions>
      </Contact>
    </Container>
  );
};

export default Detail;
