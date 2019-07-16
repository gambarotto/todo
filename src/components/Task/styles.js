import styled from 'styled-components/native';

export const Container = styled.View`
    height: 90px;    
    padding: 0 10px;
    background: #fff;
    border-radius: 4px;
    margin: 10px 20px;
`;
export const Tarefa = styled.Text.attrs({
    numberOfLines: 2   
})`
    flex: 1;
    font-size: 20px;
    color: #554439;
`
export const Actions = styled.View`    
    flex-direction: row;
`
export const Feito = styled.TouchableOpacity`
    
    font-size: 20px;
    color: black;
    align-self: center;    
    justify-content: center;
`
export const Cancelar = styled.TouchableOpacity`
    align-self: center;
    justify-content: center;    
`
export const TextButton = styled.Text`    
    padding: 5px 5px;
    justify-content: center;
    align-self: center;    
    font-size: 20px;
    color: black;
`
export const Dia = styled.Text`
    flex: 1;
    font-size: 8px;
    color: #333;
    justify-content: center;
    align-self: center;
`