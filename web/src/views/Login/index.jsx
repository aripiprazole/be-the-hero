import React, { useState } from "react";

import { FiLogIn } from "react-icons/fi";

import HeroesImg from "../../assets/heroes.png";
import LogoImg from "../../assets/logo.svg";

import { BackLink, SubmitButton, TextInput } from "../../styles";

import { Container, Form, FormSection } from "./styles";
import { Link, useHistory } from "react-router-dom";
import Api from "../../services/api";

const Login = () => {
  const [id, setId] = useState("");

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
      const response = await Api.post("login", {
        id,
      });

      localStorage.setItem("ongId", id);
      localStorage.setItem("ongName", response.data.name);

      history.push("/profile");
    } catch {
      alert("Verifique os campos.");
    }
  }

  return (
    <Container>
      <FormSection>
        <img src={LogoImg} alt={"Logo"} />

        <Form onSubmit={handleSubmit}>
          <h1>Faça seu login</h1>

          <TextInput
            value={id}
            onChange={(event) => setId(event.target.value)}
            type={"text"}
            placeholder={"Seu id"}
          />

          <SubmitButton type={"submit"}>Entrar</SubmitButton>

          <Link to={"/register"} component={BackLink}>
            <FiLogIn size={16} color={"#e02041"} />
            Não possuo cadastro
          </Link>
        </Form>
      </FormSection>

      <img src={HeroesImg} alt={"Heroes Image"} />
    </Container>
  );
};

export default Login;
