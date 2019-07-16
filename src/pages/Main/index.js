import React, { Component } from 'react';
import { Text, AsyncStorage } from 'react-native'
import { Container, Title, Form, Input, Submit, TextIcon, List } from './styles'
import Task from '../../components/Task/index'

class Main extends Component {

  constructor(props) {
    super(props)

    this.state = {
      id: 0,
      task: '',
      tasks: [],
      haveId: '',
      atualized:false
    }
  }

  componentDidMount() {
    let id = 0

    this.attID()
  }

  tes = () => {
    const obj = { id: 1, desc: 'hhhhhhhhh' }
    AsyncStorage.setItem('UID123', JSON.stringify(obj), () => {
      AsyncStorage.getItem('UID123', (err, result) => {
        alert(result);
      });
    });

  }

  async attID() {

    //await AsyncStorage.clear()

    AsyncStorage.getItem('id', (err, result) => {
      if (result) {
        this.setState({
          id: parseInt(result),
          haveId: true
        }), alert('tem ' + this.state.id)
      } else {
        this.setState({
          id: 0,
          haveId: false
        }), alert('nao')
      }

    })
    //})

  }

  getCurrentDate() {
    const date = new Date().getDate(); //Current Date
    const month = new Date().getMonth() + 1; //Current Month
    const year = new Date().getFullYear(); //Current Year
    const hours = new Date().getHours(); //Current Hours
    const min = new Date().getMinutes(); //Current Minutes
    const sec = new Date().getSeconds(); //Current Seconds
    const currentDate = date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec
    return currentDate
  }


  getFromDB = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key)
      return value
    } catch (e) {
      console.log('erro get ' + e);
      return 'error ' + e
    }
  }
  getAllTasksFromDB = async (ids) => {
    const keys = []
    
    for(let i ; i<parseInt(ids); i++){
      keys.push(i+1)
    }

    const tasks = []

    AsyncStorage.getAllKeys((err, keys) => {
      AsyncStorage.multiGet(keys, (err, stores) => {
        stores.map((result, i, store) => {
          // get at each store's key/value so you can work with it
          let key = store[i][0];
          let value = JSON.parse(store[i][1])
          tasks.push(value)
        });
      });
    });

    return tasks

  }

  saveOnDB = async (value) => {

    const id = this.state.id + 1
    objTask = { id: id.toString(), descricao: value, dia: this.getCurrentDate(), feito: false }

    try {
      await AsyncStorage.setItem(id.toString(), JSON.stringify(objTask), async () => {
        if (this.state.haveId) {
          alert('merge ' + JSON.stringify(objTask))
          await AsyncStorage.mergeItem('id', id.toString())
        } else {
          alert('setitem ' + JSON.stringify(objTask))
          await AsyncStorage.setItem('id', id.toString())
        }
        this.setState({
          id
        })
        //alert(JSON.stringify(objTask))

      })
    } catch (e) {
      this.setState({
        db: 'erro'
      }), alert('erro ao salvar')
    }
  }

  verifyData(){
    const obj = []
    if(this.state.haveId && !this.state.atualized){
      const obj = this.getAllTasksFromDB(this.state.id)
      this.setState({
        atualized: true
      })
      return obj
    }else if(this.state.atualized){
      obj = [...this.state.tasks]
      return obj
    }
  }

  setInput = (item) => {
    this.setState({
      task: item
    })
    //console.log(this.state.task)
  }
  render() {
    return (
      <Container>
        <Title>Adicionar a Tarefa</Title>
        <Form>
          <Input
            defaultValue={this.state.task}
            onChangeText={item => this.setInput(item)}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Digite a Tarefa..."
          />
          {/*<Submit onPress={(taskText) => { this.addTask }}>*/}
          <Submit onPress={async () => {

            await this.saveOnDB(this.state.task)
            tsk = this.state.id + 1
            const objT = { id: tsk.toString(), descricao: this.state.task, dia: this.getCurrentDate(), feito: false }
            await this.setState({
              tasks: [...this.verifyData(), objT],
              task: '',
            })
          }}>
            <TextIcon>+</TextIcon>
          </Submit>
        </Form>
        {/*this.state.tasks ? <Text>{JSON.stringify(this.state)}</Text> : <Text>nao</Text>*/}
        {this.state.tasks &&
          <List
            keyboardShouldPersistTaps="handled"
            data={this.state.tasks}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <Task data={item} />
            )}>
          </List> 
        }
      </Container>
    )
  }
}

export default Main