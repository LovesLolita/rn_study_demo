import React, {useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableHighlight,
} from 'react-native';
import girlImg from '../assets/img/girl.jpg';
import girlImgTwo from '../assets/img/girl2.png';
import bg_card from '../assets/images/bg_card.png';
import icon_bank from '../assets/images/icon_bank.png';

const TimerView = () => {

  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);

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
          <TouchableHighlight onPress={onPress}>
        <View style={styles.button}>
          <Text>Touch Here</Text>
        </View>
      </TouchableHighlight>
      <View style={styles.countContainer}>
        <Text style={styles.countText}>
          {count ? count : null}
        </Text>
      </View>
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
      <ImageBackground
        style={styles.viewStyle}
        imageStyle={styles.imgStyle}
        source={bg_card}>
        <Image style={styles.icon_logo} source={icon_bank} />
        <Text style={styles.txtBank}>
          {`招商银行\n`}
          <Text style={styles.cardTypeTxt}>{`储蓄卡\n`}</Text>
          <Text style={styles.cardNoTxt}>1234 5456 7777 3068</Text>
        </Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  TimerView: {
    height: '100%',
    backgroundColor: '#000',
    flexDirection: 'column',
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  },
  countText: {
    color: "#FF00FF"
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
  imgBgcView: {
    backgroundColor: '#000',
  },
  viewStyle: {
    margin: 5,
    width: '98%',
    height: 150,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  imgStyle: {
    resizeMode: 'cover',
    borderRadius: 12,
  },
  icon_logo: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginLeft: 20,
    marginTop: 20,
  },
  txtBank: {
    fontSize: 24,
    color: 'white',
    marginLeft: 10,
    marginTop: 21,
    fontWeight: 'bold',
  },
  cardTypeTxt: {
    fontSize: 20,
    color: '#FFFFFFA0',
    fontWeight: 'normal',
  },
  cardNoTxt: {
    lineHeight: 50,
    fontSize: 22,
    color: '#ccc',
  },
  input: {
    width: '100%',
    height: 56,
    backgroundColor: '#D0D0D0',
    fontSize: 24,
    color: '#333333',
    fontWeight: 'bold',
  },
});

export default TimerView;
