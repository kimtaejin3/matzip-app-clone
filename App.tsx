/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Button, SafeAreaView, StyleSheet, Text, TextInput} from 'react-native';

function App(): JSX.Element {
  return (
    // view는 웹에서의 div와 유사
    <SafeAreaView style={styles.container}>
      <Text>Hello react native</Text>
      <Button title="버튼" onPress={() => console.log('클릭됨')} />
      <TextInput />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    margin: '10%',
    marginHorizontal: 10,
    marginVertical: 20,
  },
});

export default App;
