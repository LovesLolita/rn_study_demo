import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import girlImg from '../assets/img/girl.jpg';
import girlImgTwo from '../assets/img/girl2.png';

const TimerView = () => {
  const [num, setNum] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setNum(pre => pre + 2);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const viewRef = useRef(null);
  const TimerViewLayOut = e => {
    console.log(e.nativeEvent);
  };

  useEffect(() => {
    setTimeout(() => {
      viewRef.current.setNativeProps({
        style: {
          backgroundColor: '#ccc',
        },
      });
    }, 2000);
  }, []);


  return (
    <View
      ref={viewRef}
      style={styles.TimerView}
      onLayout={e => TimerViewLayOut(e)}>
      <Text style={[styles.textMarginTop, styles.TimeText]}>计时器</Text>
      <Text style={styles.TimeText}>{num}</Text>
      <Image
        source={girlImgTwo}
        style={styles.img}
        blurRadius={0}
        defaultSource={girlImg}
        fadeDuration={2000}
        onLoad={() => {
          console.log('onLoad');
        }}
        onError={() => {
          console.log('onError');
        }}
      />
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
    fontFamily: 'maobi',
    color: '#1d67f7',
    fontSize: 70,
    textAlign: 'center',
  },
  img: {
    margin: 50,
    backgroundColor: '#000',
    width: 260,
    height: 220,
    resizeMode: 'cover',
    // tintColor: '#fff'
  },
});

export default TimerView;
