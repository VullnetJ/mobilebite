import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, Image, FlatList } from 'react-native';

export default function App() {
  const [msg, setMsg] = React.useState("");
  const [randNm, setRandNm] = React.useState(0);
  const [infoText, setInfo] = React.useState("");

  React.useEffect(() => {
    startGame();
  }, [])

  const startGame = () => {
    setRandNm(Math.floor(Math.random() * 100) +1);
    setCounter(0);
    setInfo("Guess a number between 1-100")
  }
  const checkAnswer = () => {
    if (guessNum === randNm) {
      // Show alert
      //startGame()
    }
    if (guessNum <randNm){
      setInfo('Your number ' + guessNum + ' is too low');
    }
  }
  const buttonPressed = () => {
    Alert.alert('Alert', 'You typed: ' + msg);
  }
  const data = 0;
  return (
    <View style={styles.container}>
      <Text>Guess a number between 1-100</Text>
      <TextInput
        style={{ width: 200, borderColor: 'brown', borderWidth: 1}}
        onChangeText = { text => setMsg(text) }
        value = {msg}
      />
      <Button  title ="Press me" onPress={buttonPressed} />
      <FlatList
        data ={data}renderItem={({item  })   =>
          <Text  >{item  .key}</Text >}
          />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
  },
});
