/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react'
import { AsyncStorage, StyleSheet, Text, View } from 'react-native'

class App extends Component {
  execute = async () => {
    const result = await AsyncStorage.getItem('thanosNumber')
    if (result) {
      this.setState({
        thanosNumber: Number(result)
      })
    } else {
      const newNumber = Math.random()
      this.setState({
        thanosNumber: newNumber
      })
      AsyncStorage.setItem('thanosNumber', newNumber.toString())
    }
  }
  constructor() {
    super()
    this.state = {
      thanosNumber: Math.random()
    }

    this.execute()
    // // 데이터베이스에서 가져온 다음
    // AsyncStorage.getItem('thanosNumber', (error, result) => {
    //   if (result) {
    //     // 기록이 있으면 있는 기록을 활용함
    //     this.setState({
    //       thanosNumber: Number(result)
    //     })
    //   } else {
    //     // 기록이 전혀 없으면 새로 생성하고
    //     const newNumber = Math.random()
    //     this.setState({
    //       thanosNumber: newNumber
    //     })
    //     AsyncStorage.setItem('thanosNumber', newNumber.toString())
    //   }
    // })
  }

  result = () => {
    resultText = '당신은 타노스에게 죽임을 당하였습니다'
    if (this.thanosNumber > 0.5) {
      resultText = '당신은 타노스에게서 살아났습니다'
    }
    return <Text>{resultText}</Text>
  }

  render() {
    this.exec()

    return <View style={styles.container}>{this.result()}</View>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
})

export default App
