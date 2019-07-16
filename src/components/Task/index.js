import React, { Component } from 'react';
import { Text, View, AsyncStorage } from 'react-native'
import { Container, TextButton, Tarefa, Actions, Feito, Cancelar, Dia } from './styles'
import { Image } from 'react-native'
import  db  from '../../services/db'

class Task extends Component {
  constructor(props){
    super(props)
  }
  async taskOk(id) {
    const t = await AsyncStorage.getItem(id)
    alert(t)
  }
  render() {
    const {data} = this.props  
    return (
      <Container>
        <Tarefa>{data.descricao}</Tarefa>
        <Actions>
          <Dia>{data.dia}</Dia>
          <Cancelar onPress={() => { this.cancelTask }}>
            <TextButton>c</TextButton>
          </Cancelar>
          <Feito onPress={() => { this.taskOk(data.id) }}>
            <TextButton>ok</TextButton>
          </Feito>
        </Actions>
      </Container>
    )
  }
}

export default Task