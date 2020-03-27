import styled from "styled-components";

export const SubmitButton = styled.button`
  width: 100%;
  height: 60px;
  background: #e02041;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  color: #f9f9f9;
  margin-top: 16px;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  line-height: 60px;
  transition: filter 0.2s;

  :hover {
    filter: brightness(90%);
  }
`;

export const SubmitLink = styled.a`
  width: 100%;
  height: 60px;
  background: #e02041;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  color: #f9f9f9;
  margin-top: 16px;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  line-height: 60px;
  transition: filter 0.2s;

  :hover {
    filter: brightness(90%);
  }
`;

export const InputGroup = styled.div`
  display: flex;

  input + input {
    margin-left: 8px;
  }
`;

export const BackLink = styled.a`
  display: flex;
  align-items: center;
  margin-top: 40px;
  font-size: 18px;
  font-weight: normal;

  svg {
    margin-right: 16px;
  }

  :hover {
    opacity: 0.8;
  }
`;

export const TextInput = styled.input`
  width: 100%;
  height: 60px;
  color: #333;
  border: 1px solid #dcdce6;
  border-radius: 8px;
  padding: 0 24px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  resize: vertical;
  min-height: 140px;
  color: #333;
  border: 1px solid #dcdce6;
  border-radius: 8px;
  padding: 16px 24px;
  line-height: 24px;
`;
