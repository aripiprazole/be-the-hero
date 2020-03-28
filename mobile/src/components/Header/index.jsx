import React from "react";

import PropTypes from "prop-types";

import LogoImg from "../../assets/logo.png";

import { Image } from "react-native";

import { Container } from "./styles";

const Header = ({ children }) => {
  return (
    <Container>
      <Image source={LogoImg} />
      {children}
    </Container>
  );
};

Header.propTypes = {
  children: PropTypes.element,
};

export default Header;
