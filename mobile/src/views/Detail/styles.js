import styled from "styled-components/native";
import Constants from "expo-constants";

export const Container = styled.View`
  flex: 1;
  padding: ${Constants.statusBarHeight + 20}px 24px 0;
`;

export const Back = styled.TouchableOpacity``;

export const Contact = styled.View`
  padding: 24px;
  border-radius: 8px;
  background: #fff;
  margin-bottom: 16px;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: #13131a;
  line-height: 30px;
`;

export const Description = styled.Text`
  font-size: 15px;
  margin-top: 16px;
  color: #737380;
`;

export const Actions = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 16px;
`;

export const Action = styled.TouchableOpacity`
  background: #e02041;
  border-radius: 8px;
  height: 50px;
  width: 48%;
  justify-content: center;
  align-items: center;
`;

export const ActionText = styled.Text`
  color: #fff;
  font-size: 15px;
  font-weight: bold;
`;

export const IncidentWrap = styled.View`
  margin-top: 48px;
  margin-bottom: 16px;
`;
