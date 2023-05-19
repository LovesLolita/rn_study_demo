/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Text, View, SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import TimerView from './src/components/TimerView';
import ScrollViewDemo from './src/components/ScrollViewDemo'
import FlatListDemo from './src/components/FlatListDemo'
import SectionListDemo from './src/components/SectionListDemo'
import ModalDemo from './src/components/ModalDemo'
import PersonalInfo from './src/components/PersonalInfo'

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.sectionContainer}>
        {/* <TimerView></TimerView> */}
        {/* <ScrollViewDemo></ScrollViewDemo> */}
        {/* <FlatListDemo /> */}
        {/* <SectionListDemo /> */}
        <ModalDemo />
        {/* <PersonalInfo></PersonalInfo> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    // marginTop: 10,
    // paddingHorizontal: 24,
  },
});

export default App;
