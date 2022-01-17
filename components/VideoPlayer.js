import React from "react";
import { WebView } from 'react-native-webview';
import { View } from "react-native";
import { Dimensions } from 'react-native';

const VideoPlayer = () => {
  const windowWidth = Dimensions.get('window').width;

  return (
    <WebView style={{ height: 250, width: windowWidth, overflow:'hidden' }}
     source={{uri: 'https://www.youtube.com/embed/M-P4QBt-FWw'}} />

  );
};


export default VideoPlayer;
