import React, { useState } from "react";

import { FiArrowLeft } from "react-icons/fi";

import { Link, useHistory } from "react-router-dom";

import LogoImg from "../../assets/logo.svg";

import { BackLink, SubmitButton, TextInput, TextArea } from "../../styles";
import { Container } from "./styles";
import { Content, Form, Section } from "./styles";
import Api from "../../services/api";

const NewIncident = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState(0);

  const history = useHistory();

  const ongId = localStorage.getItem("ongId");
  const ongName = localStorage.getItem("ongName");

  if (!ongId || !ongName) {
    history.push("/");
  }

  /**
   * @param {React.FormEvent} event
   */
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await Api.post("incidents", {
        title,
        description,
        value,
      });
    } catch {
      alert("Verifique a sua escrita.");
    }
  }

  return (
    <Container>
      <Content>
        <Section>
          <img src={LogoImg} alt={"Logo Image"} />

          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </p>

          <Link to={"/profile"} component={BackLink}>
            <FiArrowLeft size={16} color={"#e02041"} />
            Voltar para o perfil
          </Link>
        </Section>

        <Form onSubmit={handleSubmit}>
          <TextInput
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder={"Titulo do caso"}
          />
          <TextArea
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder={"Descrição do caso"}
          />
          <TextInput
            value={value}
            onChange={(event) => setValue(event.target.value)}
            type={"number"}
            placeholder={"Valor"}
          />
          <SubmitButton type={"submit"}>Registrar</SubmitButton>
        </Form>
      </Content>
    </Container>
  );
};

export default NewIncident;
