import styled from "styled-components";
import { SubmitLink } from "../../styles";

export const Container = styled.main`
  width: 100%;
  max-width: 1180px;
  padding: 0 30px;
  margin: 32px auto;

  h1 {
    margin-top: 80px;
    margin-bottom: 24px;
  }
`;

export const Cases = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 24px;

  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
  }
`;

export const Case = styled.li`
  background: #fff;
  padding: 24px;
  border-radius: 8px;
  position: relative;

  strong {
    display: block;
    margin-bottom: 16px;
    color: #41414d;
  }

  p + strong {
    margin-top: 32px;
  }

  p {
    color: #737380;
    line-height: 21px;
    font-size: 16px;
  }
`;

export const TrashIcon = styled.button`
  position: absolute;
  border: 0;
  top: 24px;
  right: 24px;
  transition: filter 0.2s;
  background: transparent;

  :hover {
    filter: brightness(90%);
  }
`;

export const RegisterNewIncident = styled(SubmitLink)`
  width: 260px;
  margin-left: auto;
  margin-top: 0;
`;

export const Button = styled.button`
  height: 60px;
  width: 60px;
  border-radius: 4px;
  border: 1px solid #dcdce6;
  margin-left: 16px;

  transition: border-color 0.2s;

  :hover {
    border-color: #999;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;

  span {
    font-size: 20px;
    margin-left: 24px;
  }

  img {
    height: 64px;
  }
`;
