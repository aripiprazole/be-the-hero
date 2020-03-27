import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  max-width: 1120px;
  height: 100%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  flex-wrap: wrap;
`;

export const FormSection = styled.section`
  width: 100%;
  max-width: 350px;
  margin-right: 60px;
`;

export const Form = styled.form`
  margin-top: 100px;
  h1 {
    font-size: 32px;
    margin-bottom: 32px;
  }
`;
