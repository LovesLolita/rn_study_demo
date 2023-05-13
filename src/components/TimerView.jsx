import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';

const TimerView = () => {
  const [num, setNum] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setNum(pre => pre + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <View style={styles.TimerView}>
      <Text style={[styles.textMarginTop, styles.TimeText]}>计时器</Text>
      <Text style={styles.TimeText}>{num}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  TimerView: {
    height: '100%',
    backgroundColor: '#000',
  },
  textMarginTop: {
    marginTop: 20,
  },
  TimeText: {
    color: '#1d67f7',
    fontSize: 70,
    textAlign: 'center',
  },
});

export default TimerView;
