import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient'
import { getStatusBarHeight } from 'react-native-status-bar-height'

export const Container = styled(LinearGradient).attrs({
    colors: ['#a52b6d', '#6c813e'],
    start: {x:0, y:0},
    end: {x:1, y:1}
})`
  flex: 1;
  padding-top: ${30 + getStatusBarHeight(true)}px;
`;
export const Title = styled.Text`
  font-size: 32px;
  color: #FFF;
  font-weight: bold;
  padding: 0 20px;
`
export const Form = styled.View`
  flex-direction: row;
  margin-top: 10px;
  padding: 0 20px;
`
export const Input = styled.TextInput.attrs({
  placeholderTextColor: "#999"
})`
  flex: 1;
  padding: 12px 15px;
  border-radius: 4px;
  font-size: 16px;
  color: #333;
  background: #FFF;
`
export const TextIcon = styled.Text`
  font-size: 16px;
  color: #FFF;
  font-weight: bold;
  padding: 0 20px;
`
export const Submit = styled.TouchableOpacity`
  background: #37235e;
  justify-content: center;
  border-radius: 4px;
  padding: 0 16px;
  margin-left: 10px;
`
export const List = styled.FlatList.attrs({
  contentContainerStyle: {paddingHorizontal: 0},
  showsVerticalScrollIndicator: false
})`
  margin-top: 20px;
`
