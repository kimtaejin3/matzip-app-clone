/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';

function App(): JSX.Element {
  return (
    // view는 웹에서의 div와 유사
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} />
        <Text>Hello react native</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} />
        <Text>Hello react native</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
  },
  input: {
    flex: 1,
    borderWidth: 2,
    borderColor: 'black',
    height: 100,
    width: 100,
  },
  inputContainer: {
    // flex: 1,
    backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default App;
