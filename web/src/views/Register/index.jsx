import React, { useState } from "react";

import Api from "../../services/api";

import { FiArrowLeft } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";

import LogoImg from "../../assets/logo.svg";

import { BackLink, InputGroup, SubmitButton, TextInput } from "../../styles";
import { Container, Content, Form, Section } from "./styles";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUF] = useState("");

  const history = useHistory();

  const ongId = localStorage.getItem("ongId");
  const ongName = localStorage.getItem("ongName");

  if (ongId && ongName) {
    history.push("/profile");
  }

  /**
   * @param {React.FormEvent} event
   */
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await Api.post("ongs", {
        name,
        email,
        whatsapp,
        city,
        uf,
      });

      alert(`O seu id de acesso é: ${response.data.id}`);
      history.push("/");
    } catch {
      alert("Verifique os campos.");
    }
  }

  return (
    <Container>
      <Content>
        <Section>
          <img src={LogoImg} alt={"Logo Image"} />

          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos de sua ONG.
          </p>

          <Link to={"/"} component={BackLink}>
            <FiArrowLeft size={16} color={"#e02041"} />
            Já possuo uma conta
          </Link>
        </Section>

        <Form onSubmit={handleSubmit}>
          <TextInput
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder={"Nome da ONG"}
          />
          <TextInput
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type={"email"}
            placeholder={"E-mail"}
          />
          <TextInput
            value={whatsapp}
            onChange={(event) => setWhatsapp(event.target.value)}
            placeholder={"Whatsapp"}
          />
          <InputGroup>
            <TextInput
              value={city}
              onChange={(event) => setCity(event.target.value)}
              placeholder={"Cidade"}
            />
            <TextInput
              value={uf}
              onChange={(event) => setUF(event.target.value)}
              placeholder={"UF"}
              style={{
                width: 80,
              }}
            />
          </InputGroup>
          <SubmitButton type={"submit"}>Registrar</SubmitButton>
        </Form>
      </Content>
    </Container>
  );
};

export default Register;
