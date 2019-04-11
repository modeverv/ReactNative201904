/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box1} />
        <View style={styles.box2} />
        <View style={styles.box3} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //    flexDirection: 'column',
    flexDirection: "row",
  },
  box1: {
    width: 100,
    height: 100,
    backgroundColor: "red"
  },
  box2: {
    width: 100,
    height: 100,
    backgroundColor: "yellow"
  },
  box3: {
    width: 100,
    height: 100,
    backgroundColor: "blue"
  }
});
