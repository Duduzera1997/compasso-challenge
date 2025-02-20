import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';

export const ContainerIcon = styled.View`
  justify-content: center;
  align-items: center;
`;
export const IconTab = styled(Feather).attrs({
  size: 20,
})`
  font-size: ${({ size }) => size}px;
`;
