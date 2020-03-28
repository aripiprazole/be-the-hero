import styled from "styled-components/native";
import Constants from "expo-constants";

export const Container = styled.View`
  flex: 1;
  padding: ${Constants.statusBarHeight + 20}px 24px 0;
`;

export const Strong = styled.Text`
  font-weight: bold;
`;

export const HeaderText = styled.Text`
  font-size: 15px;
  color: #737380;
`;

export const Description = styled.Text`
  font-size: 16px;
  line-height: 24px;
  color: #737380;
`;

export const Title = styled.Text`
  font-size: 30px;
  margin-top: 48px;
  margin-bottom: 16px;
  color: #13131a;
  font-weight: bold;
`;
