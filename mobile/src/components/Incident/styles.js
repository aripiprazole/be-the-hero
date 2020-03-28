import styled from "styled-components/native";

export const Container = styled.View`
  padding: 24px;
  border-radius: 8px;
  background: #fff;
  margin-bottom: 16px;
`;

export const IncidentProperty = styled.Text`
  font-size: 14px;
  color: #41414b;
  font-weight: bold;
`;

export const IncidentValue = styled.Text`
  margin-top: 8px;
  margin-bottom: 24px;
  color: #737380;
  font-size: 15px;
`;

export const IncidentLastProp = styled(IncidentValue)`
  margin-bottom: 0 !important;
`;

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #e02041;
  font-weight: bold;
  font-size: 15px;
`;
