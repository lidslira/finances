import styled from "styled-components/native";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { RFValue } from "react-native-responsive-fontsize";
import Feather from "@expo/vector-icons/Feather";

interface CategoryProps {
  isActive: boolean;
}

export const Container = styled(GestureHandlerRootView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(113)}px;
  
  background-color: ${({ theme }) => theme.colors.primary};
  
  justify-content: flex-end;
  align-items: center;
  padding-bottom: ${RFValue(19)}px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;

  color: ${({ theme }) => theme.colors.shape};
`;

// export const FlatListCategories = styled.FlatList.attrs({
//   contentContainerStyle: { paddingBottom: 24 },
//   showsVerticalScrollIndicator: false
// })`
//   flex: 1;
//   width: 100%;
// `;

export const Category = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
})<CategoryProps>`
  width: 100%;
  padding: ${RFValue(15)}px;

  flex-direction: row;
  align-items: center;

  background-color: ${({ theme, isActive }) => isActive ? 
  theme.colors.secondary_light : theme.colors.background};
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  margin-right: 16px;
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;

export const Separator = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.text};
`;

export const Footer = styled.View`
  width: 100%;
  padding: 24px;
`;
